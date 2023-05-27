import sys


class ArrayList:
    def __init__(self) -> None:
        self.data = []

    def __len__(self) -> list:
        return len(self.data)

    def __str__(self) -> str:
        return str(self.data)

    def get(self, index: int) -> str:
        return self.data[index]

    def set(self, index: int, value: str) -> None:
        self.data.insert(index, value)


array = ArrayList()

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(0, "Felipe")
array.set(1, "Ana")

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

array.set(2, "Shirley")
array.set(3, "Miguel")

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

print(array.get(0))
print(array.get(2))
print("-----")

index = 0
while index < len(array):
    print("Index:", index, ",Nome:", array.get(index))
    index += 1
