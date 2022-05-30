#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    if len(array) == min_size or min_size == 0:
        return array
    for i in range(min_size - len(array)):
        if value == None:
            array.append("None")
        else:
            array.append(value)
    return array

# print(pad([1,2,3], 5))
# print(pad([1, 2, 3], 5, "apple"))
# print(pad([1, 2, 3], 3))