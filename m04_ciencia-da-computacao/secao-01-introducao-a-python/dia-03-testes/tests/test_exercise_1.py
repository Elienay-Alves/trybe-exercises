"""Test the exercice 1 function"""

from src.exercise_1 import list_returner


def test_list_with_number_by_three():
    """asset that when the number is divisible by three it will be the right
    result"""
    assert list_returner(3) == [1, 2, "Fizz"]


def test_list_with_number_by_five():
    assert list_returner(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_list_with_number_by_three_and_five():
    assert list_returner(15) == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]


def test_list_with_no_parameter():
    try:
        list_returner()
    except TypeError:
        pass
    else:
        raise AssertionError


def test_list_returner_if_no_int_type():
    try:
        list_returner("string")
    except TypeError:
        pass
    else:
        raise AssertionError
