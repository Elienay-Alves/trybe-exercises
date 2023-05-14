def email_verifier(email: str) -> None:
    index = 0

    if not email[index].isalpha():
        raise ValueError("Username need to start with a letter")

    while email[index] != "@" and index < len(email):
        if (
            not email[index].isalpha()
            and not email[index].isdigit()
            and email[index] not in ("_", "-")
        ):
            raise ValueError(
                """
            Username need contains only letters,
            digits, dashes or underscore
            """
            )
        index += 1
    index += 1

    while email[index] != "." and index < len(email):
        if not email[index].isalpha() and not email[index].isdigit():
            raise ValueError(
                "Website should contains only letters, and digits"
            )
        index += 1
    index += 1

    counter = 0
    while index < len(email):
        counter += 1
        index += 1

    if counter > 3:
        raise ValueError("Extension maximum length is 3")

    return None
