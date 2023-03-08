# Using some of Ruby's built-in Hash methods, write a program that loops through a hash and prints all of the keys. 

hash = {
  this: "1",
  is: "2",
  a: "3",
  test: "4"
}

hash.each { |key, value| puts key}

# Then write a program that does the same thing except printing the values. 

hash.each { |key, value| puts value}

# Finally, write a program that prints both.

hash.each { |key, value| puts "#{key}: #{value}"}

