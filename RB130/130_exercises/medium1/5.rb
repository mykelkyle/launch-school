items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

# gather(items) do |*produce, wheat|
#   puts *produce
#   puts wheat
# end

=begin
Let's start gathering food.
apples, corn, cabbage
wheat
We've finished gathering!
=end

# gather(items) do | apples, *vegetables, wheat|
#   puts apples
#   puts *vegetables
#   puts wheat
# end

=begin
Let's start gathering food.
apples
corn, cabbage
wheat
We've finished gathering!
=end

gather(items) do | apples, *non_fruits|
  puts apples
  puts *non_fruits.join(", ")
end

gather(items) do |apples, corn, cabbage, wheat|
  puts "#{apples}, #{corn}, #{cabbage}, and #{wheat}"
end
