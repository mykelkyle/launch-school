def halvsies(arr)
  size = arr.size
  nested_arr = [[], []]
  arr.each_with_index do |num, index|
    if size.odd?
      if index <= (size / 2)
       nested_arr[0] << num
      else
       nested_arr[1] << num
      end
    else
      if index < (size / 2)
      nested_arr[0] << num
      else
      nested_arr[1] << num
      end
    end
  end
  nested_arr
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]

=begin
P -
Take an array and return two arrays (within a nested array) that contain the first half and second half of the original array. If the original array contains an odd number of elements, the middle element should be placed in the first half array.
E - halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
D - arr -> nested array
A -
take the length of the arr
divide by 2

=end
