def buy_fruit(arr)
  results = []
  arr.each do |arr|
    arr[1].times {results << arr[0]}
  end
  results
end

# test case

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]

=begin
Problem -
Take a nested array containing a string and integer value and convert it to an array of strings which each correspond to the the integer value in the original array.

Example -
[["apples", 3], ["orange", 1]] =>
["apples", "apples", "apples", "orange"]

Algorithm -
Initialize empty results array
Iterate over argument array
For each element, concatenate arr[0] multiplied by the arr[1] to the results array
Return the result
=end
