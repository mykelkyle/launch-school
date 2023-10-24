require "pry"

# def max_by(arr)
#   counter = 0
#   current = arr[counter]
#   largest_v = arr[0]

#   arr.each do |v|
#     next if v == arr[0]
#     if v.is_a?(Array)
#       v.each do |v2|
#        result = yield(v)
#        largest_v = current if result > yield(current - 1)
#       end
#     else
#       result = yield(v)
#       p result
#       largest_v = current if result > yield(current - 1)
#     end

#     counter += 1
#   end

#   largest_v
# end

def max_by(arr)
  counter = 0
  max = nil

  arr.each do |v|
    max = arr[counter] if max == nil || yield(v) > yield(max)
    counter += 1
  end

  max
end

p max_by([1, 5, 3]) { |value| value + 2 } == 5
p max_by([1, 5, 3]) { |value| 9 - value } == 1
p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } == [3, 4, 5]
p max_by([-7]) { |value| value * 3 } == -7
p max_by([]) { |value| value + 5 } == nil
