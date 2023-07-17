ALPHABET = ('a'..'z').to_a + ("A".."Z").to_a

def cleanup(str)
  chars = str.chars
  new_arr = []
  chars.each_with_index do |char, index|

    if index == 0 && ALPHABET.include?(char) == false
      new_arr << " "
    end

    if ALPHABET.include?(char) == false && ALPHABET.include?(chars[index - 1]) == false
      next
    elsif ALPHABET.include?(char) == false
      new_arr << " "
    else
      new_arr << char
    end
  end
  new_arr.join
end

# test cases

p cleanup("---what's my +*& line?") == ' what s my line '

# detect non-alphanumeric character
# if current index - 1 == space + current index == non-alphanumeric, delete current index
# else replace with space
