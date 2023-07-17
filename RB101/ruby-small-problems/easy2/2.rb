def get_length
  puts "Enter the length of the room in meters:"
  gets.chomp.to_f
end

def get_width
  puts "Enter the width of the room in meters:"
  gets.chomp.to_f
end

length = get_length
width = get_width

sqm = (length * width).round(2)
sqft = (sqm * 10.7639).round(2)
puts "The area of the room is #{sqm} square meters (#{sqft} square feet)."
