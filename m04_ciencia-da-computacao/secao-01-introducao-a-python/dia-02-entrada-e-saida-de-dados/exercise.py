import csv

with open("exercise.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
