def oddities(arr)
  results = []
  arr.each_with_index do |x, index|
    if (index + 1).odd?
      results << x
    end
  end
  results
end

p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []
p oddities([1, 2, 3, 4, 1]) == [1, 3, 1]

=begin
Problem -
Take an array and return an array that contains the odd-indexed elements of the original array

Example -
oddities([2, 3, 4, 5, 6]) == [2, 4, 6] 1st, 3rd, 5th indexes

Algorithm -

Initialize empty results array
Iterate over argument with index
If the index + 1 is odd, then concatenate it to the results array
Return the results
=end
