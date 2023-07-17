def crunch(str)
  chars = []
  str.chars.each do |char|
    chars.last == char ? next : chars << char
  end
  chars.join
end

# test cases
p crunch('ddaaiillyy ddoouubbllee') == 'daily double'
p crunch('4444abcabccba') == '4abcabcba'
p crunch('ggggggggggggggg') == 'g'
p crunch('a') == 'a'
p crunch('') == ''

=begin
P - Take a string and strip all consecutively occuring characters so that individual characters only occur in single instances
E - crunch('ddaaiillyy ddoouubbllee') == 'daily double'
D - string -> array -> string
A -
  create new arr
  iterate over string, placing each character into new arr
  unless, the previous character is the same as the curr char (then skip iteration)
  then join array back into string
C -
=end
