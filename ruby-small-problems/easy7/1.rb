# def interleave(arr1, arr2)
#   new_arr = []
#   i = 0
#   loop do
#     new_arr << arr1[i]
#     new_arr << arr2[i]
#     i += 1
#     break if i == arr1.length
#   end
#   new_arr
# end

def interleave(arr1, arr2)
  p arr1.zip(arr2).flatten(1)
end

interleave([1, 2, 3], ['a', 'b', 'c'])

# test case
# p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

=begin
P: Take two arrays and return a new array that contains all elements from both array arguments, with the elements taken in alternation
E: You may assume that both arrays are non-empty and that they have the same number of elements
D: Array + Array >> Array
A:
Initialize empty array
initialize incrementer variable
Initialize a loop
  new_arr << array1[incrementer]
  new_arr << array2[incrementer]
  increment variable + 1
end
=end
