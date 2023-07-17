def sequence(int)
  arr = []
  1.upto(int) {|num| arr << num}
  arr
end

# test cases

p sequence(5) == [1, 2, 3, 4, 5]
p sequence(3) == [1, 2, 3]
p sequence(1) == [1]

=begin
take an integer argument and return and array of all integerse, in sequence between 1 and the argument input

rules: you may assume the argument will always be a valid integer that is great than 0

5 => [1, 2, 3, 4, 5]
3 => [1, 2, 3]

data structure
iteration, array
=end
