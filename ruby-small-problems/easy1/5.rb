def print_in_box(string)
  puts "+ #{"-"*string.length} +"
  puts "| #{" " *string.length} |"
  puts "| #{string} |"
  puts "| #{" " *string.length} |"
  puts "+ #{"-"*string.length} +"
end

print_in_box("")
