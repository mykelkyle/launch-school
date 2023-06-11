def twice(int)
  first_half = ""
  second_half = ""
  str = int.to_s
  if str.length.even?
    first_half << str[0, str.length / 2]
    second_half << str[str.length / 2, str.length]
  end

  if first_half != second_half || first_half.empty? == true
    int * 2
  else
    int
  end
end

# test cases

puts twice(37) == 74
puts twice(44) == 44
puts twice(334433) == 668866
puts twice(444) == 888 #
puts twice(107) == 214 #
puts twice(103103) == 103103
puts twice(3333) == 3333
puts twice(7676) == 7676
puts twice(123_456_789_123_456_789) == 123_456_789_123_456_789
puts twice(5) == 10 #
