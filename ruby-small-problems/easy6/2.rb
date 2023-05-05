VOWELS = ["a", "e", "i", "o", "u"]
def remove_vowels(arr)
  arr.map do |string|
    string.chars.reject { |char| VOWELS.include?(char.downcase) }.join
  end
end

# p remove_vowels(%w(green YELLOW black white))

=begin
P - take an array and return it with all vowel characters removed.
E -
remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
case insensitive
input: array
output: array
D - array
A -
initialize constant variable of vowels
iterate over array
if vowels includes current character,
  next
else
  return current character
C -
=end


# test cases
p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']
