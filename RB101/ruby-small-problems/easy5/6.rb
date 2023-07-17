def word_sizes(str)
  words = str.split(" ")
  hsh = {}
  words.each do |word|
    length = word.chars.count
    if hsh[length]
      hsh[length] += 1
    else
      hsh[length] = 1
    end
  end
  hsh
end

# test cases

p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
p word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
p word_sizes('') == {}

# input: string
# output: hash

# split string by spaces into an array of words
# iterate over array of words with each
# take words and split into each character
# length = character count
# if hsh[length]
#   hsh[length] += 1
# else
#   hsh[length] = 1
# end
