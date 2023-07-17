def running_total(arr)
  total = []
  arr.each_with_index do |v, index|
    if v == arr[0]
      total << v
    else
      total << v + total[index - 1]
    end
  end
  total
end

# provided solution with Array#map:

def running_total(arr)
  sum = 0
  arr.map {|value| sum += value}
end

puts running_total([2, 5, 13]) == [2, 7, 20]
puts running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
puts running_total([3]) == [3]
puts running_total([]) == []
