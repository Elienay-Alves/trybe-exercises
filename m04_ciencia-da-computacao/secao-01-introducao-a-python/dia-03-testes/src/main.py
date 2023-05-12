def list_returner(n: type[int]) -> list[int]:
    result = []
    try:
        for number in range(1, n + 1):
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


WORDS_MEANING = {
    "ABC": 2,
    "DEF": 3,
    "GHI": 4,
    "JKL": 5,
    "MNO": 6,
    "PQRS": 7,
    "TUV": 8,
    "WXYZ": 9,
}


def word_decriptter(word: str) -> dict[str, int]:
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
    list_returner(0)
    word_decriptter("as !")
