def get_age
  puts "What is your age?"
  gets.to_i
end

def get_retirement_goal
  puts "What age would you like to retire?"
  gets.to_i
end

age = get_age
retirement_goal = get_retirement_goal

years_left = retirement_goal - age
retirement_year = Time.now.year + years_left

puts "It's #{Time.now.year}. You will retire in #{retirement_year}."
puts "You only have #{years_left} years of work to go!"
