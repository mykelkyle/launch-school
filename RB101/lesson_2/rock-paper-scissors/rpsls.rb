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

def display_divider
  puts("-" * 40)
end

def display_score(scores)
  display_divider
  prompt("Player Score: #{scores[0]}")
  prompt("Computer Score: #{scores[1]}")
  display_divider
end

def increment_player_score(scores)
  scores[0] += 1
end

def increment_computer_score(scores)
  scores[1] += 1
end

def win?(player, computer)
  OUTCOMES[player.to_sym].include?(computer.to_s)
end

def display_results(player, computer)
  if win?(player, computer)
    prompt("You won!")
  elsif win?(computer, player)
    prompt("Computer won!")
  else
    prompt("It's a tie!")
  end
end

def update_score(player, computer, scores)
  if win?(player, computer)
    increment_player_score(scores)
  elsif win?(computer, player)
    increment_computer_score(scores)
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
  answer = gets.chomp
  if answer.downcase.start_with?("y")
    true
  end
end

def get_choice
  gets.chomp.downcase
end

def validate_input(choice)
  if choice.downcase == "s"
    prompt("Please specify 'sc' for scissors and 'sp' for spock.")
    nil
  elsif VALID_CHOICES.include?(choice.to_sym)
    return choice unless choice.class == Array
    nil
  elsif shortcut?(choice)
    choice = convert_shortcut(choice)
    return choice unless choice.class == Array
    nil
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

def display_selected_choices(choice, computer_choice)
  prompt("You chose: #{choice}; Computer chose: #{computer_choice}")
end

# MAIN LOOP -----

loop do
  scores = [0, 0]

  loop do
    display_choices
    choice = validate_input(get_choice)
    if choice.nil?
      prompt("Invalid choice. Please try again.")
      display_divider
      next
    end

    computer_choice = VALID_CHOICES.sample

    display_divider
    display_selected_choices(choice, computer_choice)
    display_results(choice, computer_choice)
    update_score(choice, computer_choice, scores)
    display_score(scores)

    if grand_winner?(scores)
      display_grand_winner(scores)
      break
    end
  end
  break unless play_again?
end

prompt("Thanks for playing, goodbye!")
