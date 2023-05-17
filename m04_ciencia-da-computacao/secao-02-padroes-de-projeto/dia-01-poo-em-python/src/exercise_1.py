"""Create TV class"""


class Tv:
    """Create the abstract class TV"""

    def __init__(self, size: int) -> None:
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__on = False

    def increase_volume(self) -> None:
        """Increase the TV volume"""
        if self.__volume < 99:
            self.__volume += 1

    def decrease_volume(self) -> None:
        """Decrease the TV volume"""
        if self.__volume > 0:
            self.__volume -= 1

    def change_channel(self, channel: int) -> None:
        """Change the channel if it's between 1 and 99"""
        if channel <= 1 or channel >= 99:
            raise ValueError("Unavailable Channel")

        self.__channel = channel

    def on_off(self) -> None:
        """turn the TV on or off"""
        self.__on = not self.__on
