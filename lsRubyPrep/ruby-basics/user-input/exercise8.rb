# Write a program that asks the user to enter two integers, then prints the results of dividing the first by the second. The second number must not be 0. Since this is user input, there's a good chance that the user won't enter a valid integer. Therefore, you must validate the input to be sure it is an integer. You can use the following code to determine whether the input is an integer:

def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end

# It returns true if the input string can be converted to an integer and back to a string without loss of information, false otherwise. It's not a perfect solution in that some inputs that are otherwise valid (such as 003) will fail, but it is sufficient for this exercise.

loop do
  puts "Please enter the numerator:"
  first_operand = gets.chomp.to_i
  puts "Please enter the denominator:"
  second_operand = gets.chomp.to_i


  if second_operand != 0
    if valid_number?(first_operand.to_s) && valid_number?(second_operand.to_s)
      puts "#{first_operand} / #{second_operand} is #{first_operand / second_operand}."

      break
    else 
      puts "Invalid input - Only integers are allowed."
    end
  else 
    puts "Invalid input - Can not divide by 0."
  end

end



#  if second_operand != 0
#     if valid_number?(first_operand) && valid_number?(second_operand) 
#       puts first_operand / second_operand
#       break
#     else
#       puts "Invalid input. Only integers are allowed."
#     end
#   else
#     puts "Can not divide by 0."
#   end