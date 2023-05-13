def email_verifier(email: str) -> None:
    username = email.split("@")[0]
    website_name = email.split("@")[1].split(".")[0]
    extention = email.split(".")[1]
    dot = ""
    at = ""

    if not username.isalpha():
        raise TypeError("username cannot be have number")

    for char in email:
        if char == "@":
            at += char
        elif char == ".":
            dot += char

    print(username, at, website_name, dot, extention)
