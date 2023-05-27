import numpy as np

myarray = np.array([], dtype=int)

myarray = np.insert(myarray, 0, 5)
myarray = np.insert(myarray, 1, 3)
myarray = np.insert(myarray, 2, 5)
print("After adding some values: ", myarray)

myarray = np.insert(myarray, 1, 4)
print("After insertion in an intermediate index: ", myarray)

myarray = np.delete(myarray, 0)
print("After a value is removed: ", myarray)
