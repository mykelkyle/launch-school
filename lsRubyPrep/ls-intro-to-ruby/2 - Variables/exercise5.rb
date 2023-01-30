# Look at the following programs...

x = 0
3.times do
  x += 1
end
puts x

# and 

y = 0
3.times do
  y += 1
  x = y
end
puts x

# What does x print to the screen in each case? Do they both give errors? Are the errors different? Why?

# In the first program, x would print 3. In the second program, printing x would result in an error because you cannot declare a variable within local scope. Printing x would create a name error. 