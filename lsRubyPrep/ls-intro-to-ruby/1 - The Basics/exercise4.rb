# Use the dates from the previous example and store them in an array. Then make your program output the same thing as exercise 3.

movie_titles = {
  Shrek: 2001,
  Shrek2: 2004,
  Shrek3: 2007,
  Shrek_the_musical: 2008,
  Shrek_forever_after: 2010
}

release_years = []

movie_titles.each { |key, value| release_years.push(value) }

puts release_years