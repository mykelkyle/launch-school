def reverse_words(str)
  new_arr = []
  arr = str.split(" ").each do |word|
    if word.length >= 5
      new_arr << word.reverse
    else
      new_arr << word
    end
  end
  new_arr.join(" ")
end

# test cases

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS
