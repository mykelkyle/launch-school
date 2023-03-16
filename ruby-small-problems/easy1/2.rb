def is_odd?(int)
  int % 2 == 1 # or !=
end

puts is_odd?(2) #false
puts is_odd?(3) #true
puts is_odd?(-17) #true
puts is_odd?(-18) #false
