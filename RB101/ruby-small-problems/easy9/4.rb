def word_lengths(str)
  results = []
  str.split(" ").each do |word|
    results << word + " #{word.length}"
  end
  results
end

# test cases

p word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

p word_lengths("baseball hot dogs and apple pie") ==
  ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

p word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

p word_lengths("Supercalifragilisticexpialidocious") ==
  ["Supercalifragilisticexpialidocious 34"]

p word_lengths("") == []

=begin
Problem -
Take a string as an argument and return an array that contains each word from the string and its respective word length

Rules -
Words in the string are separated by exactly one space
Any substring of non-space characters is a word

Example -
"It ain't easy, is it?" => ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
"This is a test" => ["This 4", "is 2", "a 1", "test 4"]

Algorithm -

Initialize an empty array for results
Split the word into an array, with each element representing a single word
  Iterate over this array and concatenate each word to the new array with its respective length
Return array
=end
