# Use the each method of Array to iterate over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], and print out each value.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.each {|num| puts num}

# Same as above, but only print out values greater than 5.

array.each do |num|
  if num > 5
    puts num
  end
end


# Now, using the same array from #2, use the select method to extract all odd numbers into a new array.



odd = array.select do |num|
  num.odd? == true 
end

  

# Append 11 to the end of the original array. Prepend 0 to the beginning.

odd.push(11)
odd.unshift(0)


# Get rid of 11. And append a 3.

odd.pop
odd.push(3)

# Get rid of duplicates without specifically removing any one value.

odd.uniq!

p odd