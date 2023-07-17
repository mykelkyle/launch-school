def count_occurrences(arr)
  arr.tally
end

# test cases:

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

p count_occurrences(vehicles)

# expected output

# car => 4
# truck => 3
# SUV => 1
# motorcycle => 2
