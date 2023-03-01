# Write a one-liner to count the number of lower-case 't' characters in the following string:

statement = "The Flintstones Rock!"

count = 0

statement.each_char {|char| count += 1 if char == "t"}

puts count

# better solution

puts statement.count("t")
