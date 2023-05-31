def match_score(choices, riddles):
    return max(choices.differece(riddles))


def score_reducer(choices, riddles):
    return min(choices.difference(riddles))


def individual_score(choices, riddles):
    set_choices = set(choices)
    set_riddles = set(riddles)

    return match_score(set_choices, set_riddles) - score_reducer(
        set_choices, set_riddles
    )


def bluff_winner(matches):
    players = list(matches.keys())

    first_score = individual_score(matches[players[0]], matches[players[1]])
    second_score = individual_score(matches[players[1]], matches[players[0]])

    if first_score > second_score:
        return players[0]
    elif first_score < second_score:
        return players[1]
    else:
        return None


players_input = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}

who_won = bluff_winner(players_input)

if who_won:
    print(f"Who won: {who_won}")
else:
    print("It's draw")
