def repeater(str)
  arr = []
  str.chars.each {|char| arr << char * 2}
  arr.join.to_s
end

# test cases
p repeater('Hello') == "HHeelllloo"
p repeater("Good job!") == "GGoooodd  jjoobb!!"
p repeater('') == ''

=begin

problem: take a string and return a new string in which every character is doubled

ie. "hello" => "hheelllloo"

algorithm

initialize new arr
iterate over string chars argument
for each character in str, add it to new arr * 2
join array and change to string
return value
=end
