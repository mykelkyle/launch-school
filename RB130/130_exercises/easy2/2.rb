# def zip(arr1, arr2)
# result = []
# args = [arr1, arr2]

# 0.upto(arr1.size - 1) {result << []}

# arr1.each_with_index do |el, i|
#   result[i] << el
# end
# arr2.each_with_index do |el, i|
#   result[i] << el
# end
# result
# end

# def zip(arr1, arr2)
#   result = []
#   i = 0
#   length = arr1.length
#   while i < length
#     result << [arr1[i], arr2[i]]
#     i += 1
#   end
#   result
# end

def zip(arr1, arr2)
  result = []
  arr1.each_with_index do |el, i|
    result << [el, arr2[i]]
  end
  result
end


p zip([1, 2, 3], [4, 5, 6])# == [[1, 4], [2, 5], [3, 6]]

=begin
P -
Take two arrays and combine them into a single array in which element is a two-element array where the first element is a value from one array, and the second element is a value from the second array

Input -
Two arrays
Output -
One nested array

E -
[[1, 2, 3], [4, 5, 6]]

D
A
C
=end
