# Edit the method definition in exercise #4 so that it does print words on the screen. 2) What does it return now?

def scream(words)
  words = words + "!!!!"
  puts words
end

scream("Yippeee")

# Still returns nil because without an explicit return value, the method will automatically return the last expression which in this case is on line 5: puts words.