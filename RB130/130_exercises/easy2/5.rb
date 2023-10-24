def drop_while(arr)
  drop = false
  result = []

  arr.each do |el|
    drop = true if !yield(el)
    result << el if drop
  end

  result
end


p drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
p drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| true } == []
p drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while([]) { |value| true } == []

# could use a while loop here, as once the first falsey value is returned, we know the rest of the arr will be a part of the result. Short-circuit
