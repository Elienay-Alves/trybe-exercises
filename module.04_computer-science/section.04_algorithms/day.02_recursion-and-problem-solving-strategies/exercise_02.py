def even_counter(n: int) -> int:
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + even_counter(n + 1)
    else:
        return even_counter(n - 1)
