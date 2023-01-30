# Write a program that outputs the factorial of the numbers 5, 6, 7, and 8.

def factorial (num)

  sum = 1
  i = 1

  while i <= num 
    sum += sum * i
    i += 1
  end

  puts "The factorial of #{num} is #{sum}."
end

factorial(7)

  
