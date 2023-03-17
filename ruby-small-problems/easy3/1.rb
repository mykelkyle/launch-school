def prompt(msg)
  puts "==> #{msg}"
end

def get_1st
  prompt("Enter the 1st number:")
  gets.to_i
end

def get_2nd
  prompt("Enter the 2nd number:")
  gets.to_i
end

def get_3rd
  prompt("Enter the 3rd number:")
  gets.to_i
end

def get_4th
  prompt("Enter the 4th number:")
  gets.to_i
end

def get_5th
  prompt("Enter the 5th number:")
  gets.to_i
end

def get_last
  prompt("Enter the last number:")
  gets.to_i
end

def appears?(arr, last)
  if arr.include?(last)
    prompt("The number #{last} appears in #{arr}.")
  else
    prompt("The number #{last} does not appear in #{arr}.")
  end
end

arr = []

arr << get_1st
arr << get_2nd
arr << get_3rd
arr << get_4th
arr << get_5th
last = get_last

appears?(arr, last)
