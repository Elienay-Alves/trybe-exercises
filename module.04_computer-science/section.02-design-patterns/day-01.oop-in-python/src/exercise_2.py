"""Implements a Statistic class responsible for calculate
    a list of numbers"""

from collections import Counter


class Statistic:
    """Implement the Statistic class passing numbers
    as attribute"""

    def __init__(self, numbers: list[int]) -> None:
        self.numbers = numbers

    def calculate_average(self) -> int:
        """Return the average of the list"""
        size = len(self.numbers)
        total = sum(self.numbers)

        return total / size

    def calculate_median(self) -> int:
        """Return the median of the list"""
        numbers = sorted(self.numbers)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2
        return numbers[index]

    def calculate_mode(self):
        """Return the mode of list"""
        number, _ = Counter(self.numbers).most_common()[0]
        return number


TEST = Statistic.calculate_average([5, 5])
print(TEST)
