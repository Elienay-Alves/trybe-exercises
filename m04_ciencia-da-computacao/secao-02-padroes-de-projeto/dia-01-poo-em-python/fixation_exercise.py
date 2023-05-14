class Fan:
    def __init__(
        self, color: str, power: int, voltage: int, price: int
    ) -> None:
        self.price = price
        self.__color = color
        self.__power = power
        self.__voltage = voltage
        self.__on = False

    def __str__(self) -> str:
        return f"a fan. its color is {self.__color}."


class Person:
    def __init__(self, name: str, account_balance: int) -> None:
        self.name = name
        self.account_balance = account_balance
        self.fan = None

    def buy_a_fan(self, fan: Fan) -> None:
        if fan.price <= self.account_balance:
            self.account_balance -= fan.price
            self.fan = fan

    def __str__(self) -> str:
        if self.fan:
            return f"{self.name} has {self.fan}"
        return f"{self.name} don't hava a fan."


white_fan = Fan("white", power=250, voltage=220, price=100)
person = Person("Elienay", account_balance=2000)
person.buy_a_fan(white_fan)

print(person)
