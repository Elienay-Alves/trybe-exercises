"""Cria a classe TV"""


class Tv:
    """Cria a classe abstrata TV"""

    def __init__(self, tamanho: int) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    @property
    def volume(self) -> int:
        """Pega o atributo privado volume para manipula-lo"""
        return self.__volume

    def modifica_volume(self, volume: int) -> int:
        """Modifica volume de acordo com parametro passado"""
        if not 0 < volume <= 99:
            raise ValueError("Volume must be between 0 and 99!")
        self.__volume = volume
        return volume

    @property
    def canal(self) -> int:
        """Pega o atributo privado canal para manipula-lo"""
        return self.__canal

    def modificar_canal(self, canal: int) -> int:
        """Modifica canal de acordo com parametro passado"""
        if not 1 < canal < 99:
            raise ValueError("Canal precisa estar entre 1 e 99!")
        self.__canal = canal

    @property
    def ligada(self) -> bool:
        """Pega o atributo privado ligada para manipula-lo"""
        return self.__ligada

    def ligar_desligar(self, ligada) -> None:
        if not ligada:
            self.__ligada = True
        self.__ligada = False


VOLUME = Tv.modifica_volume(Tv, 67)

print(VOLUME)
