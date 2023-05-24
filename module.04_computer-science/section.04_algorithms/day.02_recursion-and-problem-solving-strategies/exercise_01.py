def even_counter(n: int) -> int:
    number_of_even = 0

    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            number_of_even += 1

    return number_of_even
