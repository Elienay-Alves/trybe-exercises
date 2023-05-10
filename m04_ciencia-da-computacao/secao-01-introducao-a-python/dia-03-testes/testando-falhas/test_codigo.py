import codigo


def test_is_odd_when_number_is_odd_returns_true():
    """
    Para um número ímpar a função deve retornar o valor True
    """
    assert codigo.is_odd(3) is True


def test_is_odd_when_number_even_return_false():
    """
    Para um número par a função deve retornar o valor False
    """
    assert codigo.is_odd(2) is False
