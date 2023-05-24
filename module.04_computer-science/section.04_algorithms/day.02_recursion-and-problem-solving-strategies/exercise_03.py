def biggerint_number(list: list[int], lenght: int) -> int:
    if lenght == 1:
        return list[0]
    else:
        bigger_in_the_rest_of_list = biggerint_number(list, lenght - 1)
        if bigger_in_the_rest_of_list > list[lenght - 1]:
            return bigger_in_the_rest_of_list
        else:
            return list[lenght - 1]


def bigger_int(list: list[int]) -> int:
    lenght = len(list)
    return biggerint_number(list, lenght)


print(bigger_int([1, 21, 300, 4, 57]))
