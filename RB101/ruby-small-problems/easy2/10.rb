def negative(num)
  return num if num <= 0

  num * -1
end

# provided solution

def negative(num)
  number > 0 ? -number : number
end

# or

def negative(number)
  -number.abs
end


puts negative(5) == -5
puts negative(-3) == -3
puts negative(0) == 0      # There's no such thing as -0 in ruby
