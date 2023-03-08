# What method could you use to find out if a Hash contains a specific value in it? Write a program that verifies that the value is within the hash.

# The include? method

hash = {
  this: 1,
  is: 2,
  a: 3,
  test: 4
}

p hash.has_value?(3) # or
p hash.value?(3)

# expected output: true

