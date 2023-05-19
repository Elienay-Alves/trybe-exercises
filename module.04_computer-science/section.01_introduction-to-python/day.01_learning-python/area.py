"""
Este é um módulo de de exercício.

Ele fornece funções para cálculo de área de algumas figuras geométricas.

Autor: Elienay Alves
Data: 28/04/2023
"""

PI = 3.14


def square(side):
    '''Calcula a área do quadrado'''
    return side * side


def rectangle(length, width):
    '''Calcula a área do retângulo'''
    return length * width


def circle(radius):
    '''Calcula a área do circulo'''
    return PI * radius * radius


if __name__ == "__main__":
    print("Área do quadrado: ", square(10))
    print("Área do retângulo: ", rectangle(2, 2))
    print("Área do círculo: ", circle(3))
