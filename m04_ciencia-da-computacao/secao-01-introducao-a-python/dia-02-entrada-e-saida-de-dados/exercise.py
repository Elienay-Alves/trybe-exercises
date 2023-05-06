import csv

with open("exercise.csv", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
