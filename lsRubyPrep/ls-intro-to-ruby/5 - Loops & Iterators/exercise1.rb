# What does the each method in the following program return after it is finished executing?

x = [1, 2, 3, 4, 5]
p x.each do |a|
  a + 1
end

# the original array that the .each method was called on will be returned every time. In this case, that would be x, or [1, 2, 3, 4, 5].