import random

natural_numbers = input("Digite um número a ser somado: ")

numbers = natural_numbers.split(" ")

sum = 0

for num in numbers:
    if not num.isdigit():
        err = f"Erro ao somar valores, {natural_numbers} é um valor inválido"
        print(err)
    else:
        sum += int(num)

random_number = random.randint(1, 10)


print(sum + random_number)
