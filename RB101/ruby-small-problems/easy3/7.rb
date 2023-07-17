def palindrome?(input)
  input.reverse == input
end

# str

puts palindrome?('madam') == true
puts palindrome?('Madam') == false          # (case matters)
puts palindrome?("madam i'm adam") == false # (all characters matter)
puts palindrome?('356653') == true

# arr

puts palindrome?([1, 2, 3, 2, 1]) == true
puts palindrome?(["car", "bike", "bike", "car"]) == true
puts palindrome?(["car", "car", "bike", "car"]) == false
