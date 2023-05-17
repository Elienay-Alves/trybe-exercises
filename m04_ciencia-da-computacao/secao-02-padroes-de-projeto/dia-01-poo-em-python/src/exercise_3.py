"""Implements a abstract class to calculate geometric figures"""

from abc import ABC, abstractmethod
from math import pi


class GeometricFigure(ABC):
    """Abstract class to calculate geometric figures"""

    @abstractmethod
    def area(self):
        """abstract area method"""
        raise NotImplementedError

    @abstractmethod
    def perimeter(self):
        """abstract perimeter method"""
        raise NotImplementedError


class Square(GeometricFigure):
    """class square receives abstract super class"""

    def __init__(self, side) -> None:
        self.side = side

    def area(self):
        return self.side * self.side

    def perimeter(self):
        return 4 * self.side


class Rectangle(GeometricFigure):
    """class rectangle receives abstract super class"""

    def __init__(self, base, height) -> None:
        self.base = base
        self.height = height

    def area(self):
        return self.base * self.height

    def perimeter(self):
        return 2 * (self.base + self.height)


class Circle(GeometricFigure):
    """class circle receives abstract super class"""

    def __init__(self, radius) -> None:
        self.radius = radius

    def area(self):
        return pi * self.radius * self.radius

    def perimeter(self):
        return 2 * pi * self.radius
