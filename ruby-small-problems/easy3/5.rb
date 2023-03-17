def square(int, power)
  multiply(int, int) ** (power - 1)
end

def multiply(first, second)
  first * second
end

puts square(5, 4) #== 25 (625)
puts square(-8, 3) #== 64
