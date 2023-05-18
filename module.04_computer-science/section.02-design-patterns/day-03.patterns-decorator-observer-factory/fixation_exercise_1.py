class Calculator:
    def sum(self, x, y):
        return x + y


class DecoratedCalculator:
    def __init__(self, calculator) -> None:
        self.calculator = calculator

    def prtuguese_number_conversor(self, number):
        if not isinstance(number, str):
            return number

        return {
            "um": 1,
            "dois": 2,
            "três": 3,
            "quatro": 4,
            "cinco": 5,
            "seis": 6,
            "sete": 7,
            "oito": 8,
            "nove": 9,
            "dez": 10,
        }.get(number)

    def sum(self, x, y):
        return self.calculator.sum(
            self.prtuguese_number_conversor(x),
            self.prtuguese_number_conversor(y),
        )


if __name__ == "__main__":
    calculator = Calculator()
    print("10 + 20 =")
    calculator.sum(10, 20)

    decoraded_calculator = DecoratedCalculator(calculator)
    print("'oito' + 'dois' =", decoraded_calculator.sum("oito", "dois"))
