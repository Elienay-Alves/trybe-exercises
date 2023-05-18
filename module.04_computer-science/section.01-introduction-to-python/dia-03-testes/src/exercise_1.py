"""Escreva um programa que retorne uma lista
com os valores numéricos de 1 a N"""


def list_returner(number: type[int]) -> list[int]:
    """programa que retorne uma lista com os valores numéricos de 1 a N"""
    result = []
    try:
        for number in range(1, number + 1):
            if number % 3 == 0 and number % 5 == 0:
                result.append("FizzBuzz")
            elif number % 3 == 0:
                result.append("Fizz")
            elif number % 5 == 0:
                result.append("Buzz")

            else:
                result.append(number)
        return result
    except TypeError as esc:
        raise TypeError("Tipo inválido") from esc


if __name__ == "__main__":
    list_returner(0)
