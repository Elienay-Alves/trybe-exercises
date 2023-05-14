from src.exercise_2 import word_decriptter
import pytest


def test_lenght_of_parameter_less_than_one():
    with pytest.raises(
        ValueError, match="Expected length to be between 1 and 30"
    ):
        word_decriptter("")


def test_lenght_of_parameter_bigger_than_thirty():
    forty_words = "I have more than thirty word in me haha!"
    with pytest.raises(
        ValueError, match="Expected length to be between 1 and 30"
    ):
        len(word_decriptter(forty_words)) > 30


def test_if_raises_error_parameter_is_invalid_character():
    with pytest.raises(ValueError, match="Invalid Character"):
        word_decriptter("asb !.")


def test_if_is_returning_the_right_number():
    assert word_decriptter("1-HOME-SWEET-HOME") == "1-4663-79338-4663"
    assert word_decriptter("MY-MISERABLE-JOB") == "69-647372253-562"
