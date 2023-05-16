class Home_appliances:
    def __init__(
        self, color: str, power: int, voltage: int, price: int
    ) -> None:
        self.price = price
        self.__color = color
        self._power = power
        self._voltage = voltage
        self.__on = False
        self.__speed = 0
        self.__max_speed = 3
        self.__current_motor_current = 0

    def turn_on(self, speed: int) -> None:
        if speed > self.__max_speed or speed < 0:
            raise ValueError(f"Speed must be between 0 and {self.__max_speed}")

        self.__speed = speed
        self.__current_motor_current = (
            (self._power / self._voltage) / self.__max_speed
        ) * speed
        self.__on = True

    def turn_off(self) -> None:
        self.__on = False
        self.__speed = 0

    def its_on(self) -> bool:
        return self.__on

    @property
    def color(self) -> str:
        return self.__color.upper()

    @color.setter
    def color(self, new_color: str) -> None:
        self.__color = new_color


class Person:
    def __init__(self, name: str, account_balance: int) -> None:
        self.name = name
        self.account_balance = account_balance
        self.fan = None


class Fan(Home_appliances):
    pass


class Dryer(Home_appliances):
    pass


class Mixer(Home_appliances):
    pass


class Washing_machine(Home_appliances):
    pass


if __name__ == "__main__":
    # person = Person("Elienay", account_balance=2000)
    # person.buy_a_fan(white_fan)
    fan = Fan("white", power=250, voltage=220, price=100)
    dryer = Dryer("red", power=220, voltage=110, price=370)
    w_machine = Washing_machine("grey", power=250, voltage=220, price=500)

    print(f"I have a fan and payed US${fan.price} for it!")
    print(
        f"I had to buy a {dryer.color} dryer and brought one of {dryer._voltage} voltage by mistake!"
    )
    print(
        f"That {w_machine.color} it's so expensive. She payed {w_machine.price} for that, right?"
    )
