def swapcase(str)
  test = str.split.map do |word|
    word.chars.map {|char| char == char.upcase ? char.downcase : char.upcase}.join
  end
  test.join(" ")
end

# test cases:
p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'
