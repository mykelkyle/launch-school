# In an earlier exercise, you wrote a program that prints 'Launch School is the best!' repeatedly until a certain number of lines have been printed. Our solution looked like this:



answer = nil

loop do
  loop do
    puts "Enter how many lines you would like to print. (Q to quit):"

    answer = gets.chomp.downcase
    break if answer == "q"

    answer = answer.to_i
    break if answer >= 3
    puts "Not enough lines."
  end

  break if answer == "q"
  answer.times {puts "Launch School is the best!"}
end