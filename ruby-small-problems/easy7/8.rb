require "pry"

def multiply_list(arr1, arr2)
  new_arr = []
  i = 0
  loop do
    new_arr << (arr1[i] * arr2[i])
    i += 1
    break if i == arr1.length
  end
  new_arr
end

# test cases:

p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

# return a new array containing the product of each pair of numbers from the arguments that have the same index
