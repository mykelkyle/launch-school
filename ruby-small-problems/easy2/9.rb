name = 'Bob'
save_name = name
name.upcase!

puts name, save_name

# expected output:

# name = "BOB"
# save_name = "BOB"

# The reason is that #upcase! is a mutative method. Since save_name is pointing to the same object as `name`, both variables get mutated despite the method only being invoked on `name`.
