# What will the following code print, and why?

array = [1, 2, 3]

array.each do |element|
  a = element
end

puts a

# expected output: error, undefined local variable

# The local variable a that is initialized in the block passed to the each method has a scope that is local to that block. Since there is no local variable named a initialized in a scope external to the scope of that block, the expression a = element on line 4 is initialization and not reassignment.