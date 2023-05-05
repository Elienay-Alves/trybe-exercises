import json

with open("pokemons.json", encoding="utf-8") as file:
    pokemeons = json.load(file)["results"]

    grass_type_pokemons = [
        pokemon for pokemon in pokemeons if "Grass" in pokemon["type"]
    ]

with open("grass_pokemon.json", mode="w", encoding="utf-8") as file:
    json_to_write = json.dumps(grass_type_pokemons)

    file.write(json_to_write)
