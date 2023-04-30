def digit_list(num)
  num.to_s.chars.map {|num| num.to_i}
end

# test cases
puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
puts digit_list(7) == [7]                     # => true
puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
puts digit_list(444) == [4, 4, 4]             # => true

=begin
P - Take a positive integer and return an array containing each digit of the given number. e.g. 235325 => [2, 3, 5, 3, 2, 5]
E - (12345) == [1, 2, 3, 4, 5]
Will always be a positive number
D - Int => Array
A -
Convert int to string
split string into chars?
iterate over array
convert each str el to int el
return arr
C -
=end
