class Player
  attr_accessor :guesses, :guess

  def initialize
    @guesses = 7
    @guess = nil
  end
end

class GuessingGame
  attr_reader :player, :number

  def initialize
    @player = Player.new
    @number = rand(1..100)
  end

  def display_guesses_remaining
    puts "You have #{player.guesses} guesses remaining."
  end

  def ask_number
    answer = 0
    loop do
      puts "Enter a number between 1 and 100:"
      answer = gets.chomp.to_i
      break unless answer > 100 || answer < 0 || !answer.is_a?(Integer)
      puts "Invalid guess. Enter a number between 1 and 100."
    end
    player.guess = answer
  end

  def display_result
    if player.guess > number
      puts "Your guess is too high."
    elsif player.guess < number
      puts "Your guess is too low."
    elsif player.guess == number
      puts "That's the number!"
    else
      puts "Invalid guess. Enter a number between 1 and 100."
    end
  end

  def decrement_guess
    player.guesses -= 1
  end

  def correct_answer
    player.guess == number
  end

  def no_guesses_left
    if player.guesses == 0
      puts "You have no more guesses. You lost!"
      return true
    end
  end

  def play
    loop do
      display_guesses_remaining
      ask_number
      display_result
      decrement_guess
      break if correct_answer || no_guesses_left
    end
  end
end

game = GuessingGame.new
game.play
