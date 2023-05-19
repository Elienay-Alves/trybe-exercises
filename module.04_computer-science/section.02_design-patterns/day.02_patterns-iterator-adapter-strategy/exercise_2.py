from collections.abc import Iterator, Iterable


class Card:
    def __init__(self, value: int, suit) -> None:
        self.value = value
        self.suit = suit

    def __repr__(self) -> str:
        return "<%s de %s>" % (self.value, self.suit)


class PackIterator(Iterator):
    def __init__(self, cards: Card) -> None:
        self._cards = cards
        self._position = 0

    def __next__(self):
        try:
            card = self._cards[self._position]
        except IndexError as err:
            raise StopIteration() from err
        else:
            self._position += 1
            return card


class Pack(Iterable):
    suits = "cups diamonds spades clubs".split()
    values = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cards = [
            Card(value, suit) for suit in self.suits for value in self.values
        ]

    def __len__(self):
        return len(self._cards)

    def __iter__(self):
        return PackIterator(self._cards)

    def __str__(self) -> str:
        return f"{[card for card in self]}"
