# import json
# import pytest
# import pokemon
# import io


# @pytest.fixture
# def grass_type_pokemon():
#    '''Criamos o contexto de um pokemon do tipo grama'''
#    return {
#        "national_number": "001",
#        "evolution": None,
#        "name": "Bulbassaur",
#        "type": ["Grass", "Poison"],
#        "total": 318,
#        "hp": 45,
#        "attack": 49,
#        "defense": 49,
#        "sp_atk": 65,
#        "sp_def": 65,
#        "speed": 45,
#    }


# @pytest.fixture
# def water_type_pokemon():
#    '''We created of water type of pokemon'''
#    return {
#        "national_number": "007",
#        "evolution": None,
#        "name": "Squirtle",
#        "type": ["Water"],
#        "total": 314,
#        "hp": 44,
#        "attack": 48,
#        "defense": 65,
#        "sp_atk": 50,
#        "sp_def": 64,
#        "speed": 43,
#    }


# def test_retrieve_pokemons_by_type(grass_type_pokemon, water_type_pokemon):
#    '''We created a file in memory and the content is the two pokemons'''
#    fake_file = io.StringIO(
#        json.dumps({'results': [grass_type_pokemon, water_type_pokemon]})
#        )

#    # when we search pokemons by type grass,
#    # the pokemon of type water cannot be returned
#    assert grass_type_pokemon in pokemon.retrieve_pokemons_by_type(
#        'grass', fake_file,
#        )

import json
from unittest.mock import mock_open, patch
from pokemon import retrieve_pokemons_by_type


def test_retrieve_pokemons_by_type():

    grass_type_pokemon = {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbassaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }

    water_type_pokemon = {
            "national_number": "007",
            "evolution": None,
            "name": "Squirtle",
            "type": ["Water"],
            "total": 314,
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "sp_atk": 50,
            "sp_def": 64,
            "speed": 43,
        }

    pokemon_json_content = json.dumps({'results': [grass_type_pokemon, water_type_pokemon]})

    with patch("builtins.open", mock_open(read_data=pokemon_json_content)):
        assert retrieve_pokemons_by_type('grass', 'dummy') == [
            grass_type_pokemon
            ]
