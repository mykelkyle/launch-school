def substrings(str)
  result = []
  i = 0
  str.size.times do
    0.upto(str.size - 1) do |index|
      result << str[i..index]
    end
    i += 1
  end
  result.reject(&:empty?)
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]

=begin
take string and return an array which contains every substring possible. The returned list should be in the order in which the string's substrings begin, shortest to longest.

each with index
nested loop
until
=end
