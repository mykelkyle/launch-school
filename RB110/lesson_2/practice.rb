# How would you order this array of number strings by descending numeric value?

# arr = ['10', '11', '9', '7', '8']

# new_arr = arr.sort do |a, b|
#   b.to_i <=> a.to_i
# end

# p new_arr

# How would you order this array of hashes based on the year of publication of each book, from the earliest to the latest?

# books = [
#   {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967'},
#   {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
#   {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
#   {title: 'Ulysses', author: 'James Joyce', published: '1922'}
# ]

# new_arr = books.sort_by do |hsh|
#   hsh[:published]
# end

# p new_arr


# For each of these collection objects demonstrate how you would reference the letter 'g'.
# arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]

# arr2 = [{first: ['a', 'b', 'c'], second: ['d', 'e', 'f']}, {third: ['g', 'h', 'i']}]

# arr3 = [['abc'], ['def'], {third: ['ghi']}]

# hsh1 = {'a' => ['d', 'e'], 'b' => ['f', 'g'], 'c' => ['h', 'i']}

# hsh2 = {first: {'d' => 3}, second: {'e' => 2, 'f' => 1}, third: {'g' => 0}}

# p arr1[2][1][3]
# p arr2[1][:third][0]
# p arr3[2][:third][0][0]
# p hsh1['b'][1]
# p hsh2[:third].keys[0]

# For each of these collection objects where the value 3 occurs, demonstrate how you would change this to 4.

# arr1 = [1, [2, 3], 4]

# arr2 = [{a: 1}, {b: 2, c: [7, 6, 5], d: 4}, 3]

# hsh1 = {first: [1, 2, [3]]}

# hsh2 = {['a'] => {a: ['1', :two, 3], b: 4}, 'b' => 5}

# arr1[1][1] = 4
# p arr1

# arr2[2] = 4
# p arr2

# hsh1[:first][2][0] = 4
# p hsh1

# hsh2[["a"]][:a][2] = 4
# p hsh2

# munsters = {
#   "Herman" => { "age" => 32, "gender" => "male" },
#   "Lily" => { "age" => 30, "gender" => "female" },
#   "Grandpa" => { "age" => 402, "gender" => "male" },
#   "Eddie" => { "age" => 10, "gender" => "male" },
#   "Marilyn" => { "age" => 23, "gender" => "female"}
# }

# Determine the total age of just the male members of the family.

# male_ages = 0

# munsters.each do |k, v| # could just use #each_value since we dont need the key
#   if v["gender"] == "male"
#     male_ages += v["age"]
#   end
# end

# p male_ages

# Given this previously seen family hash, print out the name, age and gender of each family member:

# munsters = {
#   "Herman" => { "age" => 32, "gender" => "male" },
#   "Lily" => { "age" => 30, "gender" => "female" },
#   "Grandpa" => { "age" => 402, "gender" => "male" },
#   "Eddie" => { "age" => 10, "gender" => "male" },
#   "Marilyn" => { "age" => 23, "gender" => "female"}
# }

# munsters.each do |name, details|
#   puts "#{name} is a #{details["age"]}-year-old #{details["gender"]}."
# end

# Given this code, what would be the final values of a and b? Try to work this out without running the code.

# a = 2
# b = [5, 8]
# arr = [a, b]

# arr[0] += 2
# arr[1][0] -= a

# p arr
# [4, [3, 8]]

# Using the each method, write some code to output all of the vowels from the strings.

# hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}

# VOWELS = ["a", "e", "i", "o", "u"]

# hsh.each do |k, v|
#   v.each do |str|
#     chars = str.chars
#     chars.each {|char| puts char if VOWELS.include?(char)}
#   end
# end

# Given this data structure, return a new array of the same structure but with the sub arrays being ordered (alphabetically or numerically as appropriate) in descending order.

# arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]

# arr.each do |arr|
#   arr.sort!
#   arr.reverse!
# end

# p arr

# provided solution =>

# arr.map do |sub_arr|
#   sub_arr.sort do |a, b|
#     b <=> a
#   end
# end

# Given the following data structure and without modifying the original array, use the map method to return a new array identical in structure to the original but where the value of each integer is incremented by 1.

# new_arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}].map do |sub_hash|
#   new_hsh = {}
#   sub_hash.each do |k, v|
#     new_hsh[k] = v + 1
#   end
#   new_hsh
# end

# p new_arr

# Given the following data structure use a combination of methods, including either the select or reject method, to return a new array identical in structure to the original but containing only the integers that are multiples of 3.

# arr = [[2], [3, 5, 7, 12], [9], [11, 13, 15]]

# new_arr = arr.map do |sub_arr|
#   sub_arr.select do |num|
#     num % 3 == 0
#   end
# end

# p new_arr

# Given the following data structure, and without using the Array#to_h method, write some code that will return a hash where the key is the first item in each sub array and the value is the second item.

# arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]

# # expected return value: {:a=>1, "b"=>"two", "sea"=>{:c=>3}, {:a=>1, :b=>2, :c=>3, :d=>4}=>"D"}

# test = arr.each_with_object({}) do |sub_arr, hash|
#   hash[sub_arr[0]] = sub_arr[1]
# end

# p test

# arr = [[1, 6, 9], [6, 1, 7], [1, 8, 3], [1, 5, 9]]

# # [[1, 8, 3], [1, 5, 9], [6, 1, 7], [1, 6, 9]]

# test = arr.sort_by do |sub_array|
#   sub_array.select do |num|
#     num.odd?
#   end
# end

# p test

# Given this data structure write some code to return an array containing the colors of the fruits, and the sizes of the vegetables. The sizes should be uppercase and the colors should be capitalized.

# hsh = {
#   'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
#   'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
#   'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
#   'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
#   'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
# }

# FRUITS = ["grape", "apple", "apricot"]
# VEGETABLES = ["carrot", "marrow"]
# arr = []

# hsh.each do |k, v|
#   if FRUITS.include?(k)
#     arr << v[:colors].map {|color| color.capitalize}
#   else
#     arr << v[:size].upcase
#   end
# end

# p arr

# Given this data structure write some code to return an array which contains only the hashes where all the integers are even.

# arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

# #expected return => [{e: [8], f: [6, 10]}]
# test = arr.select do |hash|
#   hash.all? do |k, v|
#     v.all? {|num| num.even?}
#   end
# end

# p test

# Write a method that returns one UUID when called with no parameters.

# def create_uuid
#   hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"]
#   counter = 0
#   uuid = []
#   while counter < 36
#     case uuid.size
#     when 8
#       uuid << "-"
#       counter += 1
#       next
#     when 13
#       uuid << "-"
#       counter += 1
#       next
#     when 18
#       uuid << "-"
#       counter += 1
#       next
#     when 23
#       uuid << "-"
#       counter += 1
#       next
#     end
#     char = hexadecimal.sample
#     uuid << char
#     counter += 1
#   end
#   uuid.join
# end

# p create_uuid

# def generate_UUID
#   characters = []
#   (0..9).each { |digit| characters << digit.to_s }
#   ('a'..'f').each { |digit| characters << digit }

#   uuid = ""
#   sections = [8, 4, 4, 4, 12]
#   sections.each_with_index do |section, index|
#     section.times { uuid += characters.sample }
#     uuid += '-' unless index >= sections.size - 1
#   end

#   uuid
# end

order_data = [
  {customer_id: 12, customer_name: 'Emma Lopez', order_id: 351, order_date: '12/04/16', order_fulfilled: true, order_value: 135.99},
  {customer_id: 12, customer_name: 'Emma Lopez', order_id: 383, order_date: '12/04/16', order_fulfilled: true, order_value: 289.49},
  {customer_id: 12, customer_name: 'Emma Lopez', order_id: 392, order_date: '01/10/17', order_fulfilled: false, order_value: 58.00},
  {customer_id: 32, customer_name: 'Michael Richards', order_id: 241, order_date: '11/10/16', order_fulfilled: true, order_value: 120.00},
  {customer_id: 32, customer_name: 'Michael Richards', order_id: 395, order_date: '01/10/17', order_fulfilled: false, order_value: 85.65},
  # rest of data...
]
