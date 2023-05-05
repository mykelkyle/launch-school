def reverse!(arr)
  test = []
  i = 0
  loop do
    test << arr.shift
    i += 1
    break if i == arr.length + test.length - 1
  end

  i = 0
  loop do
    arr << test.pop
    i += 1
    break if i == arr.length + test.length - 1
  end
  arr
end

# list = %w(a b e d c)
# reverse!(list) # true
# p list == ["c", "d", "e", "b", "a"] # true
=begin
P -
Take an array and mutatively reverse each item's position
Input - Array
Output - Same array
E -
list = %w(a b e d c)
reverse!(list) == ["c", "d", "e", "b", "a"] # true
list == ["c", "d", "e", "b", "a"] # true
Must be same array
D -
Array, can not use an intermediary container
A -

C -
=end

# test cases
list = [1,2,3,4]
result = reverse!(list)
p result == [4, 3, 2, 1] # true
p list == [4, 3, 2, 1] # true
p list.object_id == result.object_id # true

list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"] # true
p list == ["c", "d", "e", "b", "a"] # true

list = ['abc']
p reverse!(list) == ["abc"] # true
p list == ["abc"] # true

list = []
p reverse!(list) == [] # true
p list == [] # true
