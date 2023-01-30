# Write a program that takes a number from the user between 0 and 100 and reports back whether the number is between 0 and 50, 51 and 100, or above 100.

def which_number (num)
  if num >= 0 && num <= 100
    if num < 51 
      puts "This number is between 0 and 50"
    elsif num > 50
      puts "This number is between 51 and 100"
    end
  else
    puts "This number is either below 0, or over 100"
  end
end

which_number(101)