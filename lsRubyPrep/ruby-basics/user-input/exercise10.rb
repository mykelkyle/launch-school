# Write a program that requests two integers from the user, adds them together, and then displays the result. Furthermore, insist that one of the integers be positive, and one negative; however, the order in which the two integers are entered does not matter.

# Do not check for the positive/negative requirement until both integers are entered, and start over if the requirement is not met.

# You may use the following method to validate input integers:

def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end
  


# loop do

#   first_operand = nil
#   second_operand = nil

#   loop do
#     puts "Please enter a positive or negative integer: "
#     first_operand = gets.chomp
#     if valid_number?(first_operand) 
#       first_operand = first_operand.to_i
#       break
#     else
#       puts "Invalid input. Only non-zero integers are allowed."
#       next
#     end
#   end

#   loop do
#     puts "Please enter a positive or negative integer: "
#     second_operand = gets.chomp
#     if valid_number?(second_operand)
#       second_operand = second_operand.to_i
#       break
#     else
#       puts "Invalid input. Only non-zero integers are allowed."
#       next
#     end
#   end

#     if first_operand > 0 && second_operand > 0
#       puts "Sorry. One integer must be positive, one must be negative. Please start over."
#       next
#     elsif first_operand < 0 && second_operand < 0
#       puts "Sorry. One integer must be positive, one must be negative. Please start over."
#       next
#     else
#       puts "#{first_operand} + #{second_operand} = #{first_operand + second_operand}"
#       break
#     end
# end

# CLEANER VERSION WITH METHODS

def read_number
  loop do
    puts "Please enter a positive or negative number: "
    number = gets.chomp
    return number.to_i if valid_number?(number)
    puts "Invalid input. Only non-zero integers are allowed."
  end
end

first_operand = nil
second_operand = nil

loop do
  first_operand = read_number
  second_operand = read_number
  break if first_operand * second_operand < 0
  puts "Sorry, one integer must be positive, one must be negative. Please start over."
end

sum = first_operand + second_operand
puts "#{first_operand} + #{second_operand} = #{sum}"