# What does each method return in the following example?

arr = [15, 7, 18, 5, 12, 8, 5, 1]

arr.index(5)

# 3 // .index returns the index of the first element that matches the given argument

arr.index[5]

# NoMethodError: undefined method // this syntax does not work with the index method

arr[5]

# 8
