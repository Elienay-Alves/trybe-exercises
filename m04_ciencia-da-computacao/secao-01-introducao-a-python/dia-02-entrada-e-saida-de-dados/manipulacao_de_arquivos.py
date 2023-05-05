# escrita

CHARACTERS_FILE = open(
    "meus-personagens-favoritos.txt", mode="wb", encoding="utf-8"
)
CHARACTERS = ["Bart\n", "Lisa\n", "Moe\n", "Homer\n"]

CHARACTERS_FILE.writelines(CHARACTERS)

CHARACTERS_FILE.close()

# leitura

FILE = open("meus-personagens-favoritos.txt", mode="rb", encoding="utf-8")

for line in FILE:
    print(line)
FILE.close()
