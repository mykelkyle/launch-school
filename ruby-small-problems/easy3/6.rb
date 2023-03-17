def xor?(x, y)
  if x && y == true
    return false
  elsif x || y == true
    return true
  else
    return false
  end
end

puts xor?(5.even?, 4.even?) == true
puts xor?(5.odd?, 4.odd?) == true
puts xor?(5.odd?, 4.even?) == false
puts xor?(5.even?, 4.odd?) == false

# given solution:

# def xor?(x, y)
#   return true if x && !y
#   return true if y && !x
#   false
# end

# def xor?(value1, value2)
#   !!((value1 && !value2) || (value2 && !value1))
# end
