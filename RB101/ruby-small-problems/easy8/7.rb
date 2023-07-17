VOWELS = ["a", "e", "i", "o", "u"]

def double_consonants(str)
  new_str = ""

  str.chars.each do |char|
    if char.match?(/[[:alpha:]]/) && VOWELS.include?(char) == false
      new_str << char * 2
    else
      new_str << char
    end
  end
  new_str
end

# test cases
p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""

=begin

problem -
take a string and return a new string in which every consonant character is doubled.

non-consonant characters such as vowels, punctuation, and empty spaces should NOT be doubled.

algorithm

=end
