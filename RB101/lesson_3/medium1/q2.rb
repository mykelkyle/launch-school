# The result of the following statement will be an error:

# puts "the value of 40 + 2 is " + (40 + 2)

# Why is this and what are two possible ways to fix this?

# answer

# A typeError shows because the code is attempting to concatenate a string with an integer.

# The first way to fix this would be to convert the number into a string before attempting to concat. e.g.

puts "the value of 40 + 2 is " + (40 + 2).to_s

# The second way to fix this would be using string interpolation
# note to self: ruby does not use template literals like JS does

puts "the value of 40 + 2 is #{(40 + 2)}"
