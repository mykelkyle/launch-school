# Write a program that uses a hash to store a list of movie titles with the year they came out. Then use the puts command to make your program print out the year of each movie to the screen. 

movie_titles = {
  Shrek: 2001,
  Shrek2: 2004,
  Shrek3: 2007,
  Shrek_the_musical: 2008,
  Shrek_forever_after: 2010
}

movie_titles.each { |key, value| puts value }