def letter_case_count(str)
  hash = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  str.chars do |char|
    if letter?(char)
      if char == char.downcase
        hash[:lowercase] += 1
      elsif char == char.upcase
        hash[:uppercase] += 1
      end
    else
      hash[:neither] += 1
    end
  end
  hash
end

def letter?(char)
  char.match(/^[[:alpha:]]$/)
end

=begin
P: take a string and return a hash that has 3 keys
1: number of characters that are lowercase
2: number of characters that are uppercase
3: number of characters that are neither

D: string -> hash
A:
Initialize hash with 3 keys each set to 0 integer
Split string to characters
Iterate over characters
if character == character.upcase
  hash[upcase] += 1
elsif character == character.downcase
=end


# test cases

p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }
