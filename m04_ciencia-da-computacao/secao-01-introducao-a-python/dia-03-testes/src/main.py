def list_returner(n: type[int]) -> list[int]:
    result = []
    try:
        for number in range(1, n + 1):
            if number % 3 == 0 and number % 5 == 0:
                result.append("FizzBuzz")
            elif number % 3 == 0:
                result.append("Fizz")
            elif number % 5 == 0:
                result.append("Buzz")

            else:
                result.append(number)
        return result
    except TypeError as esc:
        raise TypeError("Tipo inválido") from esc


list_returner(0)
