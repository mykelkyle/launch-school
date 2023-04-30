def swap(str)
  words = str.split(" ")
  reverse = words.map do |word|
    chars = word.chars
    chars << chars.shift
    if word.size > 2
      chars.unshift(chars.delete(chars[chars.size - 2])).join
    else
      chars.join
    end
  end
  reverse.join(" ")
end

# p swap('Oh what a wonderful day it is')

#test cases
p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
p swap('Abcde') == 'ebcdA'
p swap('a') == 'a'
