import sys
from array import array


myarray = array("I")

myarray.insert(0, 5)
myarray.insert(1, 3)
myarray.insert(2, 5)
print("After adding some values: ", myarray)

myarray.insert(1, 4)
print("After insertion in an intermediate index: ", myarray)

myarray.pop(0)
print("After a value is removed: ", myarray)

elements = list(range(100))
print("List size:", sys.getsizeof(elements))
array_from_list = array("I", elements)
print("Array size", sys.getsizeof(array_from_list))
