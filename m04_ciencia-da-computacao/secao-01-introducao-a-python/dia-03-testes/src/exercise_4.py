from exercise_3 import email_verifier


def email_filter(emails: list[str]) -> list[str]:
    valid_email = []

    for email in emails:
        try:
            email_verifier(email)
        except ValueError as err:
            print(err)
        else:
            valid_email.append(email)
    return valid_email


email_filter(["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"])
