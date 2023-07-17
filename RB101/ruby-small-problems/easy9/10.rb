NUMS = {
"1": 1,
"2": 2,
"3": 3,
"4": 4,
"5": 5,
"6": 6,
"7": 7,
"8": 8,
"9": 9,
"0": 0
}

# def sum(int)
#   sum = 0
#   int.to_s.chars.each { |num| sum += num.to_i }
#   sum
# end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45

=begin
Problem -
Take a positive integer and return the sum of its digits

Example -
496 => 4 + 9 + 6

Algorithm -
Initialize sum variable to 0
Take integer and convert it to string
Split string by character and iterate
Add each value to sum variable
Return sum
=end
