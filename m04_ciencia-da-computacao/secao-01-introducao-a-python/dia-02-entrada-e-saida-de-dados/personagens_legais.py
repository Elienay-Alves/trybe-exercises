characters_file = open("meus-personagens-favoritos.txt", mode="w")


characters_file.write("Geralt de Rivia\n")

print("Batman\n", file=characters_file)

more = ["Bart\n", "Lisa\n"]

characters_file.writelines(more)

user_character = input("Qual o seu personagem? ")

print(f"{user_character}\n", file=characters_file)

characters_file.close()
