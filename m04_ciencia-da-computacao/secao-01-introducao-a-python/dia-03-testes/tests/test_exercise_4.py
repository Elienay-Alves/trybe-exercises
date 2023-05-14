from src.exercise_4 import email_filter


def test_if_doesnt_have_emails_returns_empty_list():
    assert email_filter([]) == []


def test_only_valid_emails():
    assert email_filter(["username@website.ext"]) == ["username@website.ext"]
