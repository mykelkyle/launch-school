def palindromic_number?(int)
  # int = number_to_string(int)
  int.to_s.reverse == int.to_s
end

# def number_to_string(num)
#   '0%o' % num
# end

puts palindromic_number?(0345430) == true
puts palindromic_number?(123210) == false
puts palindromic_number?(22) == true
puts palindromic_number?(5) == true


# On the further exploration, all numbers have infinite leading 0s, which is why we typically drop them in notation. If you are considering it part of the palindrome, you can't have a palindrome other than 0. If you ignore that, you could always ignore every consecutive 0 from the right edge and run the test, as technically they are matched by the same amount of zeros on the other side(which has infinite 0s).
