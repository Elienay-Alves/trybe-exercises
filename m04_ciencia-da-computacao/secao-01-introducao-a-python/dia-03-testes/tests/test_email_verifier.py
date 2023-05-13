from src.main import email_verifier
import pytest

USER_NAME = "nomeusuario"
AT = "@"
WEBSITE_NAME = "nomewebsite"
DOT = "."
EXTENTION = "extensao"


def test_if_email_is_the_correct_format():
    if (
        email_verifier("nomeusuario@nomewebsite.extensao")
        == USER_NAME + AT + WEBSITE_NAME + DOT + EXTENTION
    ):
        pass


def test_if_user_name_is_right():
    with pytest.raises(ValueError):
        email_verifier("123")
