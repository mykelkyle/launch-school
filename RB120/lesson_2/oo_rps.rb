class Player
  attr_accessor :move, :name, :score

  def initialize
    set_name
    @score = 0
  end

  def increment_score
    self.score += 1
  end
end

class Human < Player
  def set_name
    n = ""
    loop do
      puts "What's your name?"
      n = gets.chomp
      break unless n.empty?
      puts "Sorry, must enter a value."
    end
    self.name = n
  end

  def choose
    choice = nil
    loop do
      puts "Please choose rock, paper, scissors, lizard, or spock:"
      choice = gets.chomp.downcase
      break if ["rock", "paper", "scissors", "lizard", "spock"].include?(choice)
      puts "Sorry, invalid choice."
    end
    self.move = Object.const_get(choice.capitalize).new(choice)
  end
end

class Computer < Player
  ROBOTS = ["R2D2", "Hal", "Chappie", "Sonny", "NumberFive"]

  def set_name
    self.name = self.class.to_s
  end

  def choose
    choice = Move::VALUES.sample
    self.move = Object.const_get(choice.capitalize).new(choice)
  end

  def weighted_random_choice(choices, choice, weight)
    weighted_array = choices.dup
    weight.times { weighted_array << choice }
    return weighted_array.sample
  end
end

class R2D2 < Computer
  def choose #always picks rock
    self.move = Rock.new("rock")
  end
end

class Hal < Computer
  def choose #high likelihood of choosing scissors
    choice = weighted_random_choice(Move::VALUES, "scissors", 3)
    self.move = Object.const_get(choice.capitalize).new(choice)
  end
end

class Chappie < Computer
  def choose #high likelihood of choosing paper
    choice = weighted_random_choice(Move::VALUES, "paper", 3)
    self.move = Object.const_get(choice.capitalize).new(choice)
  end
end

class Sonny < Computer
  def choose #only ever picks lizard or spock
    choice = ["lizard", "spock"].sample
    self.move = Object.const_get(choice.capitalize).new(choice)
  end
end

class NumberFive < Computer
  def choose #picks anything except for scissors or paper
    choice = ["lizard", "spock", "rock"].sample
    self.move = Object.const_get(choice.capitalize).new(choice)
  end
end

class Move
  VALUES = ["rock", "paper", "scissors", "lizard", "spock"]

  attr_reader :value

  def initialize(value)
    @value = value
  end

  def scissors?
    @value == "scissors"
  end

  def rock?
    @value == "rock"
  end

  def paper?
    @value == "paper"
  end

  def lizard?
    @value == "lizard"
  end

  def spock?
    @value == "spock"
  end

  def to_s
    @value
  end
end

class Rock < Move
  def >(other_move)
    other_move.scissors? || other_move.lizard?
  end

  def <(other_move)
    other_move.paper? || other_move.spock?
  end
end

class Paper < Move
  def >(other_move)
    other_move.rock? || other_move.spock?
  end

  def <(other_move)
    other_move.lizard? || other_move.scissors?
  end
end

class Scissors < Move
  def >(other_move)
    other_move.paper? || other_move.lizard?
  end

  def <(other_move)
    other_move.rock? || other_move.spock?
  end
end

class Lizard < Move
  def >(other_move)
    other_move.paper? || other_move.spock?
  end

  def <(other_move)
    other_move.rock? || other_move.scissors?
  end
end

class Spock < Move
  def >(other_move)
    other_move.scissors? || other_move.rock?
  end

  def <(other_move)
    other_move.lizard? || other_move.paper?
  end
end


class RPSGame
  attr_accessor :human, :computer, :history

  def initialize
    @human = Human.new
    @computer = Object.const_get(Computer::ROBOTS.sample).new
    @history = {}
    @turn = 0
  end

  def divider
    puts "-" * 60
  end

  def display_welcome_message
    puts "Welcome to Rock, Paper, Scissors, Lizard, Spock, #{human.name}!"
    puts "First player to 10 points wins!"
    divider
  end

  def display_goodbye_message
    puts "Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye, #{human.name}!"
  end

  def display_moves
    puts "#{human.name} chose #{human.move}."
    puts "#{computer.name} chose #{computer.move}."
  end

  def display_winner
    if human.move > computer.move
      puts "#{human.name} won!"
      human.increment_score
    elsif human.move < computer.move
      puts "#{computer.name} won!"
      computer.increment_score
    else
      puts "It's a tie!"
    end
  end

  def display_score
    puts "#{human.name}'s score: #{human.score}"
    puts "#{computer.name}'s score: #{computer.score}"
    divider
  end

  def someone_has_ten_points?
    human.score == 10 || computer.score == 10
  end

  def display_grand_winner
    if human.score > computer.score
      puts "#{human.name} reached 10 points. #{human.name} is the winner!"
    else
      puts "#{computer.name} reached 10 points. #{computer.name} is the winner!"
    end
  end

  def update_move_history
    @turn += 1
    @history[@turn] = [[human.name, human.move.value], [computer.name, computer.move.value]]
  end

  def display_move_history
    puts "Game History"
    @history.each do |k, v|
      puts "Turn #{k}: #{v[0].join(" chose ")}. #{v[1].join(" chose ")}."
    end
    divider
  end

  def first_turn?
    @turn == 0
  end

  def continue?
    puts "Enter 'q' to quit, or any other key to continue:"
    answer = gets.chomp
    return true unless answer.downcase == "q"
    false
  end

  def play
    display_welcome_message
    loop do
      display_move_history unless first_turn?
      human.choose
      computer.choose
      display_moves
      display_winner
      display_score
      update_move_history
      break if someone_has_ten_points? || !continue?
      system "clear"
    end
    display_grand_winner if someone_has_ten_points?
    display_goodbye_message
  end
end

RPSGame.new.play
