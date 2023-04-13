produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'broccoli' => 'Vegetable'
}


# def select_fruit(hsh)
#   hsh.reject {|k, v| v != "Fruit"}
# end

# def select_fruit(hsh)
#   hsh.select do |k, v|
#     v == "Fruit"
#   end
# end

# p produce
# p select_fruit(produce) # => {"apple"=>"Fruit", "pear"=>"Fruit"}


# my_numbers = [1, 4, 3, 7, 2, 6]

# def double_numbers(arr)
#   arr.map! { |num| num * 2}
# end

# p double_numbers(my_numbers) # => [2, 8, 6, 14, 4, 12]
# p my_numbers

# my_numbers = [1, 4, 3, 7, 2, 6]

# def double_odd_numbers(arr)
#   arr.map do |num|
#     if num.odd?
#       num *= 2
#     else
#       num
#     end
#   end
# end

# p double_odd_numbers(my_numbers)  # => [2, 4, 6, 14, 2, 6]

# my_numbers = [1, 4, 3, 7, 2, 6]

# def multiply(arr, multiplier)
#   counter = 0
#   multiplied_arr = []
#   loop do
#     break if counter == arr.size

#     multiplied_arr << arr[counter] *= multiplier
#     counter += 1
#   end

#   multiplied_arr
# end

# p multiply(my_numbers, 3) # => [3, 12, 9, 21, 6, 18]

# [1, 2, 3].select do |num|
#   num > 5
#   'hi'
# end

# expected return => [1, 2, 3] because last statement in expression is a truthy value, therefore, all elements are selected into a new array object.

# test = ['ant', 'bat', 'caterpillar'].count do |str|
#   str.length < 4
# end

# p test
# expected return => [2] (there are 2 elements with a str length < 4)
# checks truthiness of block for given element, then returns count of the number of elements yielding a true value.

# [1, 2, 3].reject do |num|
#   puts num
# end

# expected return => [1, 2, 3]
# #reject checks for truthiness from the block's return value
# creates a new array with elements that evalute to false. here, all elements return false because #puts always returns nil

# ['ant', 'bear', 'cat'].each_with_object({}) do |value, hash|
#   hash[value[0]] = value # => setting hash key to a value syntax
# end

# expected return => {'a' => 'ant', 'b' => 'bear', 'c' => 'cat'}

# hash = { a: 'ant', b: 'bear' }
# p hash.shift

# here, #shift removes and returns the first key/value pair of the hash as an array which in this case would be [:a, "ant"]

# ['ant', 'bear', 'caterpillar'].pop.size

# expected return => 11

# [1, 2, 3].any? do |num|
#   puts num
#   num.odd?
# end

# expected return => 1

# arr = [1, 2, 3, 4, 5]
# p arr.take(2)

# #take returns the first n elements from array
# expected return => [1, 2]

# { a: 'ant', b: 'bear' }.map do |key, value|
#   if value.size > 3
#     value
#   end
# end

# expected return for #map => always an array
# [nil, "bear"]

# [1, 2, 3].map do |num|
#   if num > 1
#     puts num
#   else
#     num
#   end
# end

# expected return => [1, nil, nil]

# How does the method treat the block's return value?
# What is the return value of the method?
# How can you use the Ruby docs to learn more about a method?
# Is the method destructive?


flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

# Turn this array into a hash where the names are the keys and the values are the positions in the array.

# counter = 0

# test = flintstones.each_with_object({}) do |item, hash|
#   hash[item] = counter
#   counter += 1
# end

# flintstones_hash = {}
# flintstones.each_with_index do |name, index|
#   flintstones_hash[name] = index
# end

# p flintstones_hash

# Add up all of the ages

# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }

# p ages.values.inject(:+)

# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

# remove people with age 100 and greater.

# ages.reject! {|k, v| v >= 100}

# provided solution =>
# ages.keep_if {|_, age| age < 100}

# p ages

# Pick out the minimum age from our current Munster family hash:

# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }

# p ages.values.min


# Find the index of the first name that starts with "Be"

# flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

# test = flintstones.each_with_index do |item, index|
#   if item.start_with?("Be")
#     p index
#     return index
#   end
# end

# p test

# p flintstones.index { |name| name[0, 2] == "Be" }

# Write code that changes the array below so that all of the names are shortened to just the first three characters. Do not create a new array.

# flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

# flintstones.map! do |name|
#   name.slice(0, 3)
# end

# p flintstones

# one liner: flintstones.map! { |name| name[0,3] }

# statement = "The Flintstones Rock"

# hash = {}
# statement.chars.each do |item|

#   next if item == " "
#   if hash.include?(item)
#     hash[item] += 1
#   else
#     hash[item] = 1
#   end
# end

# p hash.sort

# problem

# input => string
# output => hash

# iterate over each character in the string and keep track of how many instances there are of each unique character. If new character, add key + set value to 1. if character exists, increment value of character in hash by 1

# data structure

# array to hold string characters
# hash to store counts

# algorithm

# numbers = [1, 2, 3, 4]
# numbers.each do |number|
#   p number
#   numbers.shift(1)
#   p numbers
# end

# p numbers

# expected output => 1, 3
# return => [3, 4]

# the reason this happens is because when the array is modified in the middle of iteration, the #each method continues moving on to the next indexed element. when shift takes out 1, then numbers becomes [2, 3, 4] and the second element is [3] which is output. then 2 is taken out and [3, 4] is left, so the iteration stops because there is not third element to iterate over any longer.

# numbers = [1, 2, 3, 4]
# numbers.each do |number|
#   p number
#   numbers.pop(1)
# end

# p numbers
# expected output => 1, 2
# expected return => [1, 2]

# words = "the flintstones rock" => words = "The Flintstones Rock"

# words = "the flintstones rock"

# def titleize(str)
#   str.split.map { |word| word.capitalize }.join(" ")
# end

# p titleize(words)

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |k, v|
  if v["age"] > 64
    v["age_group"] = "senior"
  elsif v["age"] > 17
    v["age_group"] = "adult"
  elsif v["age"] > 0
    v["age_group"] = "kid"
  end
end

p munsters

# While you're working through this course, you should concurrently work through most of the remaining exercise groups (Easy 4-9, Medium 1 and 2, and Debugging) from the RB101-RB119 Small Problems exercises on the Exercises tab. You should try to do around 30-40 exercises after each lesson. You may want to space out the exercises, tackling several problems per day.
