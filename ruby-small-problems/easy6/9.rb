def include?(arr, int)
  arr.each {|num| return true if num == int}
end


# p include?([1,2,3,4,5], 3)

# test cases

p include?([1,2,3,4,5], 3) == true
p include?([1,2,3,4,5], 6) == false
p include?([], 3) == false
p include?([nil], nil) == true
p include?([], nil) == false

=begin
p -
take two arguments, an array of integers and a single integer
return true or false based on if the single integer is included within the first array argument without using the #include? method

e -
input - array, integer
output - boolean

d -

=end
