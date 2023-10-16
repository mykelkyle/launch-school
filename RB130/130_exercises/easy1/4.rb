def divisors(int)
  1.upto(int).select {|num| int % num == 0}
end

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute

=begin
P - Write a method that takes an integer and returns an array containing all factors that can divide into the given integer, up to that exact number

input - integer
output - array

E -

divisors(1) = [1]
divisors(12) = [1, 2, 3, 4, 6, 12]

D -
iterate up to argument

A -
create new arr for return value
iterate up to argument
if the current value divided by argument can be done with no remainder, store in array
return array

C
=end
