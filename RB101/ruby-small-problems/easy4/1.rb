def short_long_short(str, str2)
  if str.size < str2.size
    str + str2 + str
  else
    str2 + str + str2
  end
end

puts short_long_short('abc', 'defgh') == "abcdefghabc"
puts short_long_short('abcde', 'fgh') == "fghabcdefgh"
puts short_long_short('', 'xyz') == "xyz"
