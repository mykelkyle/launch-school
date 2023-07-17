def rotate_array(arr)
  dup = arr.dup
  dup.push(dup.shift)
end

=begin
Problem -
Take an array and return the same array modified with the first element moved to the end of the array

Rules -
Do not use Array#rotate or Array#rotate!

Example -
[7, 3, 5, 2, 9, 1] => [3, 5, 2, 9, 1, 7]

Algorithm -
Take first element of array
Add it to end of array
=end

p rotate_array([7, 3, 5, 2, 9, 1])

p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']

x = [1, 2, 3, 4]
p rotate_array(x) == [2, 3, 4, 1]   # => true
x == [1, 2, 3, 4]                 # => true
