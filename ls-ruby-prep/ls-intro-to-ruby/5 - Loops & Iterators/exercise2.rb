stop = false

while stop == false do
  puts "Input here: "

  input = gets.chomp
  if input == "STOP"
    stop = true
  end
end