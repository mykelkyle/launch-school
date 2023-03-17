def prompt(msg)
  puts ">> #{msg}"
end

def get_int
  prompt("Please enter an integer greater than 0:")
  gets.to_i
end

def choose_calculation
  prompt("Enter 's' to compute the sum, 'p' to compute the product")
  gets.chomp
end

# uses the inject/reduce method

def sum_nums(num)
  (1..num).to_a.sum
end

def multiply_nums(num)
  (1..num).to_a.inject(:*)
end

# def iterate_integers(num, operation)
#   sum = num
#   if operation == "+"
#     while num > 0
#       sum += num - 1
#       num -= 1
#     end
#   else
#     while num > 1
#       sum *= num - 1
#       num -= 1
#     end
#   end
#   sum
# end

def display_result(num, calc)
  if calc == "s"
    puts "The sum of the integers between 1 and #{num} is #{sum_nums(num)}"
  else
    puts "The product of the integers between 1 and #{num} is #{multiply_nums(num)}"
  end
end

int = get_int
calculation = choose_calculation

display_result(int, calculation)
