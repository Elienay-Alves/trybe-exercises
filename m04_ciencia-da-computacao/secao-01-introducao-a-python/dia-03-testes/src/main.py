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


def email_verifier(email: str) -> None:
    username = email.split("@")[0]
    website_name = email.split("@")[1].split(".")[0]
    extention = email.split(".")[1]
    dot = ""
    at = ""

    if not username.isalpha():
        raise TypeError("username cannot be have number")

    for char in email:
        if char == "@":
            at += char
        elif char == ".":
            dot += char

    print(username, at, website_name, dot, extention)


if __name__ == "__main__":
    list_returner(0)
    word_decriptter("ghisa")
    email_verifier("nome_suario@nomewebsite.extensao")
