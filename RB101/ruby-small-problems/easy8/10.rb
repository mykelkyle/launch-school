def average(arr)
  arr.inject(:+) / arr.length
end

# test cases

p average([1, 5, 87, 45, 8, 8])
puts average([1, 6]) == 3 # integer division: (1 + 6) / 2 -> 3
puts average([1, 5, 87, 45, 8, 8]) == 25
puts average([9, 47, 23, 95, 16, 52]) == 40

=begin
P
a method that takes an argument (an array containing integers) and returns the average of all numbers in the array
- the array will never be empty
- numbers will always be positive integers
- result should be an integer
- don't use Array#sum (use iteration to solve)
E
average([1, 6]) == 3 # integer division: (1 + 6) / 2 -> 3
D
A
C
=end
