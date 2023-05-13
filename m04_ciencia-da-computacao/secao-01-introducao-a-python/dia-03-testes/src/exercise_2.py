"""Sua tarefa é ler uma expressão e encontrar o número de telefone
correspondente"""


def word_decriptter(word: str) -> dict[str, int]:
    """Recebe uma expressão e retorna um número telefonico baseado na mesma
    expressão"""
    upper_word = word.upper()

    if not 1 < len(upper_word) < 30:
        raise ValueError("Expected length to be between 1 and 30")

    number = ""
    for letter in upper_word:
        if letter in "ABC":
            number += "2"
        elif letter in "DEF":
            number += "3"
        elif letter in "GHI":
            number += "4"
        elif letter in "JKL":
            number += "5"
        elif letter in "MNO":
            number += "6"
        elif letter in "PQRS":
            number += "7"
        elif letter in "TUV":
            number += "8"
        elif letter in "WXYZ":
            number += "9"
        elif letter in "-01":
            number += letter
        else:
            raise ValueError("Invalid Character")
    return number


if __name__ == "__main__":
    word_decriptter("1-home-sweet-home")
