from src.exercise_3 import email_verifier
import pytest

# --- USERNAME TEST ---


def test_username_can_only_contain_letters():
    """Essa é uma função que por padrão não retorna nada então se o
    username estiver correto o retorno correto do teste tem que ser None"""
    assert email_verifier("username@nomewebsite.ext") is None


def test_username_can_contain_letters_and_digits():
    assert email_verifier("user34name@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert email_verifier("user34-name@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscore():
    assert email_verifier("user_34-name@nomewebsite.ext") is None


def test_username_should_start_with_letter():
    assert email_verifier("u@nomewebsite.ext") is None


def test_username_when_dont_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        email_verifier("1@nomewebsite.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        email_verifier("%@nomewebsite.ext")


# --- WEBSITE TEST ---


def test_website_contain_only_letters_and_digits():
    assert email_verifier("username@3321website.ext") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        email_verifier("username@websi!te.ext")


# --- EXTENSION TEST ---


def test_extension_should_contain_only_three_chars():
    assert email_verifier("username@website321.ext") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        email_verifier("username@website123.exeed")
