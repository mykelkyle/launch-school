def center_of(str)
  l = str.length
  middle = l / 2
  if l.odd?
    str[middle]
  else
    str[middle - 1..middle]
  end
end

# center_of("testings")

# find length of str
# if length.odd? => str.slice(length / 2)
# if length.even? => str.slice((length / 2 - 1), length / 2)


puts center_of('I love ruby') == 'e'
puts center_of('Launch School') == ' '
puts center_of('Launch') == 'un'
puts center_of('Launchschool') == 'hs'
puts center_of('x') == 'x'
