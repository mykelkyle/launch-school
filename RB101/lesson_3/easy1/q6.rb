# Starting with the string:

famous_words = "seven years ago..."

# show two different ways to put the expected "Four score and " in front of it.

# solution 1

puts famous_words.insert(0, "Four score and ")

# solution 2

famous_words = "seven years ago..."

puts famous_words.prepend("Four score and ")

# solution 3

famous_words = "seven years ago..."

puts "Four score and " << famous_words
