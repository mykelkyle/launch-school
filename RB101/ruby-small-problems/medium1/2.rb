def rotate_rightmost_digits(num, rotations)
  all_digits = num.to_s.chars
  all_digits[rotations..-1] = rotate_array(all_digits[rotations..-1])
  all_digits.join.to_i
end

def rotate_array(array)
  array[1..-1] ++ [array[0]]
end

=begin
Problem -
Take two arguments, a number and a number that determines the amount of rotations that should be performed on the first number
=end

p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) #== 735219
p rotate_rightmost_digits(735291, 3) #== 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917
