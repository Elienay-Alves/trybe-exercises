# Exercício 1:
def menor_numero(n):
    return min(n)


print(menor_numero([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# Exercício 2:
def print_triangulo(n):
    for row in range(1, n + 1):
        print("*" * row)


print_triangulo(6)


# Exercício 3:
def calculate_soma(n):
    somas = 0
    for index in range(1, n + 1):
        somas += index
    return somas


print(calculate_soma(6))


# Exercício 4:
def calculo_de_combustivel(litros, tipo_combustivel):
    preco_gasolina = 2.50
    preco_alcool = 1.90

    if tipo_combustivel == "A":
        if litros <= 20:
            desconto = 0.03
        else:
            desconto = 0.5
        total = litros * (preco_alcool - (preco_alcool * desconto))
    elif tipo_combustivel == "B":
        if litros <= 20:
            desconto = 0.04
        else:
            desconto = 0.06
        total = litros * (preco_gasolina - (preco_gasolina * desconto))

    return total


print(calculo_de_combustivel(15, "A"))
