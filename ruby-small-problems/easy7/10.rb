def penultimate(str)
  new_arr = str.split(" ")
  new_arr[-2]
end

# test cases:

p penultimate('last word') == 'last'
p penultimate('Launch School is great!') == 'is'
