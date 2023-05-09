import random
import json


WORDS = ["Fone", "monitor", "teclado", "mouse"]
MAX = 3


# Exercicio 1:
def name_reverse(name=str) -> str:
    for r_letter in range(len(name)):
        for index in range(len(name) - r_letter):
            print(name[index], end="")
        print()


# Exrecicio 2:


def pickup_words(file: any) -> list[str]:
    return [word.strip() for word in file]


def shuffled(word=list[str]) -> str:
    choosed_word = random.choice(word)
    shuffled_word = "".join(random.sample(choosed_word, len(choosed_word)))

    return choosed_word, shuffled_word


def guesses() -> str:
    user_guesses = []

    for att in range(MAX):
        guess = input("Adivinhe a palavra: ")
        user_guesses.append(guess)
    return user_guesses


def game_result(choosed_word=str, user_guesses=str):
    if choosed_word in user_guesses:
        print(f"Você acertou! Parabéns, a palavra é {choosed_word}!")
    else:
        print(f"Você se fudeu. A palavra certa é: { choosed_word}")


if __name__ == "__main__":
    with open("something.txt", encoding="utf-8") as file:
        words = pickup_words(file)
    choosed_word, shuffled_word = shuffled(WORDS)
    print(f"A palavra é: {shuffled_word}")
    user_guesses = guesses()
    game_result(choosed_word, user_guesses)
