def name_reverse(name=str) -> str:
    for r_letter in range(len(name)):
        for index in range(len(name) - r_letter):
            print(name[index], end="")
        print()


if __name__ == "__main__":
    NAME = input("Digite o seu nome: ")
    name_reverse(NAME)
