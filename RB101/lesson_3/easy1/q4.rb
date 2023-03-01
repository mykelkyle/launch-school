# The Ruby Array class has several methods for removing items from the array. Two of them have very similar names. Let's see how they differ:

numbers = [1, 2, 3, 4, 5]

# What do the following method calls do (assume we reset numbers to the original array between method calls)?

test = numbers.delete_at(1) # Deletes item at index[1]
test1 = numbers.delete(1) # Deletes all instances of 1


puts test
puts test1

# delete method -> Deletes all items from self that are equal to obj.
# delete_at method -> Deletes the element at the specified index, returning that element, or nil if the index is out of range.
