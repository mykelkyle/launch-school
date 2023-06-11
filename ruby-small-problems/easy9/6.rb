def sequence(count, multiple)
  results = []
  sum = multiple
  count.times do
    results << sum
    sum += multiple
  end

  results
end

# test cases

p sequence(5, 1) == [1, 2, 3, 4, 5]
p sequence(4, -7) == [-7, -14, -21, -28]
p sequence(3, 0) == [0, 0, 0]
p sequence(0, 1000000) == []

=begin
Problem -
Take two integers and return a sequenced array in which the total count is determined by the first integer and the second integer determines the first number and the multiples of each subsequent number

Rules -
The count argument will always have a value of 0 or greater
Starting number can be any integer value
If the count is 0, an empty list should be returned

Example -
sequence(3, 4) => [4, 8, 12]

Algorithm
Initialize empty results array
Initialize sum variable to multiples argument
Iterate up to count argument
  On each iteration, concatenate sum variable to results array
  Increment the sum variable with the multiple variable
Return results array
=end
