array = [1, 2, 3, 4, 5, 6]
other_array = [7, 8, 9]
new_array = array + other_array

print("United Array:", new_array)

print("---------")

print("Has 5:", 5 in new_array)
print("Has 10:", 10 in new_array)

print("---------")

print("How many times number 1 repeats:", [1, 2, 1, 2, 1, 4, 5, 6].count(1))

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print("---------")

print("index[1][1]:", matrix[1][1])
print("---------")

del matrix[2][2]
print("Deleting index [2][2]:", matrix)
