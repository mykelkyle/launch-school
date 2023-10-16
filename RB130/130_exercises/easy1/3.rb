def missing(arr)
  new_arr = []

  arr.each_with_index do |v, i|
    next if i == arr.size - 1

    counter = 1
    while v + counter < arr[i + 1]
      new_arr << v + counter
      counter += 1
    end
  end

  new_arr
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []
