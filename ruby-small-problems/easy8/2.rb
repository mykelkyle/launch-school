def leading_substrings(str)
  prev_chars = []
  arr = []
  str.chars.each do |char|
    prev_chars << char
    arr << prev_chars.join
  end
  arr
end

# test cases:

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

=begin
- return a list of all substrings of a string that start at the beginning of the original string

data structure - array
algorithm

iterate through string characters
first = str[0]
i = 0 + 1
=end
