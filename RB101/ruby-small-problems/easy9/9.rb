words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

def anagrams(arr)
  results = []
  arr.each do |word1|
    group = []
    arr.each do |word2|
      if word1.chars.sort == word2.chars.sort
        group << word2 unless group.include?(word2)
      end
    end
    results << group
  end
  results.uniq
end

p anagrams(words)
=begin
Problem -
Take an array of strings and return all strings that are anagrams (aka words that have the same exact letters in them, but in a different order)

Example -
anagrams(words) =>
["demo", "dome", "mode"]
["neon", "none"]
#(etc)

Algorithm -
Initialize empty results array
Iterate over argument array (words)
  (Compare each word's characters to all (words) characters)
    Nested iteration over words
    Initialize outer array parameter characters to an array variable
    Split each inner word into an array of characters
    Compare both arrays sorted and if they match, concat current word to results
    If not, next
  end
return results unique
end
=end
