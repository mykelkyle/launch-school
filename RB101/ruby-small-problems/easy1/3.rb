def stringy(int)
  i = 1
  string = ""
  while i <= int do
    i.odd? ? string << "1" : string << "0"
    i += 1
  end
  string
end

puts stringy(10000)

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'
