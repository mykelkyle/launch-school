def merge(arr1, arr2)
  arr1.concat(arr2).uniq
end

# p merge([1, 3, 5], [3, 6, 9])

=begin
P - Merge together two arrays into a single array, without any duplicate values.
E - merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]
Two 3's become a single 3
D - Array
A -
=end

# test case
p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]
