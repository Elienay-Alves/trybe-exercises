import codigo
import pytest


# def test_is_odd_when_number_is_odd_returns_true():
#    """
#    Para um número ímpar a função deve retornar o valor True
#    """
#    assert codigo.is_odd(3) is True


# def test_is_odd_when_number_even_return_false():
#    """
#    Para um número par a função deve retornar o valor False
#    """
#    assert codigo.is_odd(2) is False


# def test_divide_when_other_number_is_zero_raises_an_exception():
#    with pytest.raises(ZeroDivisionError, match="division by zero"):
#        codigo.divide(2, 0)


@pytest.fixture
def orders():
    """Nosso cenário (contexto) temos os seguintes pedidos"""
    return [
        {"customer": "maria", "order": "pizza", "day": "terça-feira"},
        {"customer": "joao", "order": "hamburguer", "day": "terça-feira"},
        {"customer": "maria", "order": "pizza", "day": "quarta-feira"},
        {"customer": "maria", "order": "hamburguer", "day": "quinta-feira"},
    ]


def test_get_most_ordered_dish_per_customer_when_customer_is_maria(orders):
    assert (
        codigo.get_most_ordered_dish_per_customer(orders, "maria") == "pizza"
    )


def test_get_order_frequency_per_customer_joao_and_order_is_pizza(orders):
    assert (
        codigo.get_order_frequency_per_costumer(orders, "joao", "pizza") == 0
    )


def test_get_order_frequency_per_costumer_maria_and_order_is_haburguer(orders):
    assert (
        codigo.get_order_frequency_per_costumer(orders, "maria", "hamburguer")
        == 1
    )
