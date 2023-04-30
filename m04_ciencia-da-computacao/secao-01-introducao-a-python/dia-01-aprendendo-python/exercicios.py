# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def greater_number(a, b):
    if a > b:
        print(a)
    if b > a:
        print(b)


greater_number(4, 5)


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def aritmetic_media(lista=list):
    soma = sum(lista)
    media = soma / len(lista)

    print(f"Média: {media}")


aritmetic_media([10, 20, 30, 40, 50])


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
def square(n=int):
    for row in range(n):
        for column in range(n):
            print("*", end=" ")
        print()


square(5)


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".
def greater_name(names):
    biggest_name = ""
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(greater_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas e o preço total
# a partir do tamanho de uma parede (em m²).
def paint_calculator(wall_area):
    litros = wall_area / 3
    latas = int(litros / 18)
    if litros % 18 != 0:
        latas += 1

    total = latas * 80

    return latas, total


print(paint_calculator(4.3))


# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja
# possível formar um triângulo.
def tipo_de_triangulo(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b == c:
            return "Triângulo Equilátero"
        elif a == b or a == c or b == c:
            return "Triângulo Isósceles"
        else:
            return "Triângulo Escaleno"
    else:
        return "Não é um Triângulo"


print(tipo_de_triangulo(3, 5, 5))
