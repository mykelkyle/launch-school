def get_name
  puts "What is your name?"
  gets.chomp
end

name = get_name

if name.slice(name.length - 1) != "!"
  puts "Hello #{name}."
else
  puts "HELLO #{name}. WHY ARE WE SCREAMING?"
end

# Can also use name[-1] to retrieve last str char

# #chomp conditionally removes the tail end of a string (resulting in a newline)
# #chop removes the last character unconditionally.
