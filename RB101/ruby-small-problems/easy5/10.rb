def spin_me(str)
  p str.object_id
  str.split.each do |word|
    word.reverse!
  end.join(" ")
end

p spin_me("hello world").object_id # "olleh dlrow"

# Given the method's implementation, the returned string will be a different object.
