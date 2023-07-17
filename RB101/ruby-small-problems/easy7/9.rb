def multiply_all_pairs(arr1, arr2)
  all_pairs = []
  arr1.each do |arr1_num|
    arr2.each do |arr2_num|
      all_pairs << arr1_num * arr2_num
    end
  end
  all_pairs.sort
end

# test cases:

p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

# return new array
# contains the product of every pair of numbers that can be formed between the elements of the two arrays
# the results should be sorted by increasing value
