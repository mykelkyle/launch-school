def triangle(n)

  stars = 1
  while n >= 1 do

  puts "#{(' ' * n)} #{"*" * stars}"
  n -= 1
  stars += 1
  end
end

triangle(5)

# Further Exploration
# Try modifying your solution so it prints the triangle upside down from its current orientation. Try modifying your solution again so that you can display the triangle with the right angle at any corner of the grid.

# reverse `n` and `stars`
