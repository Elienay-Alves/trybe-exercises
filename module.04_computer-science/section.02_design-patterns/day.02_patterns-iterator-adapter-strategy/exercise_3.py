from collections.abc import Iterator
from exercise_2 import Pack


class InversePackIterator(Iterator):
    def __init__(self, cards):
        self._cards = cards
        self._position = -1

    def __next__(self):
        try:
            card = self._cards[self._position]
        except IndexError as err:
            raise StopIteration() from err
        else:
            self._position -= 1
            return card


class InversePack(Pack):
    def __iter__(self):
        return InversePackIterator(self._cards)
