"""
Este é um módulo de de exercício.

Script para calcular pessoas que estão presentes em um show,
dado a área do mesmo.

Autor: Elienay Alves
Data: 28/04/2023
"""
import area


PEOPLE_PER_SQUARE_METER = 2
FIELD_LENGTH = 60
FIELD_WIDTH = 45
PEOPLE_AT_CONCERT = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)

print(f"Estão presentes no show aproximadamente {PEOPLE_AT_CONCERT} pessoas.")
