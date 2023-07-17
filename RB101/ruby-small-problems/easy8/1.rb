def sum_of_sums(arr)
  new_arr = []
  sum = 0
  arr.each do |num|
    new_arr << num
    sum += new_arr.inject(:+)
  end
  p sum
end

# test cases:

p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4
p sum_of_sums([1, 2, 3, 4, 5]) == 35

# return the sum of the sums of each leading subsequence for that array

# ex [3, 5, 2] => 3 + (3 + 5) + (3 + 5 + 2) = x
