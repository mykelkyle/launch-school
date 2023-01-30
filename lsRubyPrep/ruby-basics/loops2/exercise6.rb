# Given the array below, use loop to remove and print each name from first to last. Stop the loop once names doesn't contain any more elements.

names = ['Sally', 'Joe', 'Lisa', 'Henry']

# Keep in mind to only use loop, not while, until, etc.

loop do
  puts names.shift
  break if names.size == 0
end

# alternatively, can use names.empty? to check for any items in an array
