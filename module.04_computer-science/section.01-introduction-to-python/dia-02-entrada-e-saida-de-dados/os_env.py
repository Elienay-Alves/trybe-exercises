from decouple import config

API_USER = config("USER")
API_KEY = config("KEY")
DEBUG_MODE = config("DEBUG_MODE", defaut=False, cast=bool)
