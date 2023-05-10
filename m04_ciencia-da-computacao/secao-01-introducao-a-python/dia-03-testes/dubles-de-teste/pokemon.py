'''
FIRST CENARIO

import json


def retrieve_pokemons_by_type(type, reader):
    Lê o conteúdo de reader e o transporta de json
    para dicionário
    
    pokemons = json.load(reader)["results"]

    pokemons_by_type = [
        pokemon for pokemon in pokemons if type in pokemon["type"]
    ]
    return pokemons_by_type
'''

import json


def retrieve_pokemons_by_type(type, filepath):
    with open(filepath) as file:
        pokemons = json.load(file)["results"]
        pokemons_by_type = [
            pokemon for pokemon in pokemons if type in pokemon["type"]
        ]
        return pokemons_by_type
