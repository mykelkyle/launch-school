# How could the following method be simplified without changing its return value?

def color_valid(color)
  color == "blue" || color == "green" ? true : false
end

puts color_valid("red")

# correct answer:

# Ruby will automatically evaluate statements, so this method can be significantly simplified by changing it to just:

def color_valid(color)
  color == "blue" || color == "green"
end

# Both of these methods do exactly the same thing - but one is much more complex to read.
