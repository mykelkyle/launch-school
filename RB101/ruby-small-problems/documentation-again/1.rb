# # Locate the ruby documentation for methods File::path and File#path. How are they different?

# # The difference between
# # file::path and file#path

# # def rotate_method(arr)
# #   rotated_arr = []

# #   arr.each do |el|
# #     if el != arr[0]
# #     rotated_arr << el
# #     end
# #   end
# #   rotated_arr.push(arr[0])
# # end

# def rotate_method(arr)
#   rotated_arr = arr.select {|n| n != arr[0]}
#   rotated_arr.push(arr[0])
# end

# # or

# # def rotate_array(array)
# #   array.slice(1, array.size).push(array[0])
# # end

# x = [7, 3, 5, 2, 9, 1]

# p rotate_method(x) # => [2, 3, 4, 1]
# p x # => [1, 2, 3, 4]
