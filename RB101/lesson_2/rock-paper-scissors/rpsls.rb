OUTCOMES = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}

VALID_CHOICES = OUTCOMES.keys

# METHODS -----

def prompt(message)
  puts "=> #{message}"
end

def print_divider
  puts("-" * 40)
end

def display_score(scores)
  print_divider
  prompt("Player Score: #{scores[0]}")
  prompt("Computer Score: #{scores[1]}")
  print_divider
end

def increment_player_score(scores)
  scores[0] += 1
end

def increment_computer_score(scores)
  scores[1] += 1
end

def print_tie(scores)
  prompt("It's a tie!")
end

def win?(player, computer)
  OUTCOMES[player.to_sym].include?(computer.to_s)
end

def display_results(player, computer, scores)
  if win?(player, computer)
    prompt("You won!")
    increment_player_score(scores)
  elsif win?(computer, player)
    prompt("Computer won!")
    increment_computer_score(scores)
  else
    print_tie(scores)
  end
end

def print_player_wins
  prompt("You reached 3 points. Congratulations, you are the winner! :)")
end

def print_computer_wins
  prompt("The computer reached 3 points. You lose! :(")
end

def display_choices
  choices = VALID_CHOICES.join(', ')
  prompt("Choose one: #{choices}")
  prompt("Shortcut: 'r' for rock, 'sc' for scissors, 'sp' for spock, etc.")
end

def shortcut?(choice)
  (choice.length == 1 || choice.length == 2)
end

def convert_shortcut(choice)
  VALID_CHOICES.each do |value|
    if value.start_with?(choice)
      choice = value.to_s
      return choice
    end
  end
end

def play_again?
  prompt("Do you want to play again? (y) for yes")
end

def get_choice
  gets.chomp.downcase
end

def validate_input(choice)
  loop do
    if VALID_CHOICES.include?(choice.to_sym)
      return choice unless choice.class == Array
      return nil
    elsif shortcut?(choice)
      choice = convert_shortcut(choice)
      return choice unless choice.class == Array
      return nil
    else
      return nil
    end
  end
end

def grand_winner?(scores)
  scores[0] == 3 || scores[1] == 3
end

def display_grand_winner(scores)
  if scores[0] == 3
    print_player_wins
  elsif scores[1] == 3
    print_computer_wins
  end
end

# MAIN LOOP -----

loop do
  scores = [0, 0]

  loop do
    display_choices
    choice = validate_input(get_choice)
    if choice.nil?
      prompt("Invalid choice. Try again.")
      print_divider
      next
    end

    computer_choice = VALID_CHOICES.sample
    print_divider
    prompt("You chose: #{choice}; Computer chose: #{computer_choice}")
    display_results(choice, computer_choice, scores)
    display_score(scores)

    if grand_winner?(scores)
      display_grand_winner(scores)
      break
    end
  end
  play_again?
  answer = gets.chomp
  break unless answer.downcase.start_with?("y")
end

prompt("Thanks for playing, goodbye!")
