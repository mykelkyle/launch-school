OUTCOMES = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}

VALID_CHOICES = OUTCOMES.keys
$player_score = 0
$computer_score = 0

# METHODS -----

def prompt(message)
  puts "=> #{message}"
end

def print_divider
  puts ("-" * 40)
end

def display_score
  prompt("Player Score: #{$player_score}")
  prompt("Computer Score: #{$computer_score}")
end

def increment_pscore
  $player_score += 1
  print_divider
  display_score
  print_divider
end

def increment_cscore
  $computer_score += 1
  print_divider
  display_score
  print_divider
end

def print_tie
  prompt("It's a tie!")
  print_divider
  display_score
  print_divider
end

def win?(player, computer)
  OUTCOMES[player.to_sym].include?(computer.to_s)
end

def display_results(player, computer)
  if win?(player, computer)
    prompt("You won!")
    increment_pscore
  elsif win?(computer, player)
    prompt("Computer won!")
    increment_cscore
  else
    print_tie
  end
end

def print_pwins
  prompt("You reached 3 points. Congratulations, you are the winner! :)")
end

def print_cwins
  prompt("The computer reached 3 points. You lose! :(")
end

def display_choices
  choices = VALID_CHOICES.join(', ')
  prompt("Choose one: #{choices}")
  prompt("Shortcut: 'r' for rock, 'sp' for spock, etc.")
end

def is_shortcut?(choice)
  (choice.length == 1 || choice.length == 2)
end

def convert_letter(choice)

  VALID_CHOICES.each do |value|
    if value.start_with?(choice)
      choice = value.to_s
      return choice
      break
    end
  end
end

def play_again?
  prompt("Do you want to play again? (y) for yes")
end

# MAIN LOOP -----

loop do
  choice = ""

  loop do
    display_choices
    choice = gets.chomp

    if VALID_CHOICES.include?(choice.to_sym)
      break
    elsif is_shortcut?(choice)
      choice = convert_letter(choice)
      if choice.class == Array
        prompt("Invalid choice. Try again.")
        next
      else
        break
      end
    else
      prompt("Invalid choice. Try again.")
    end
  end

  computer_choice = VALID_CHOICES.sample
  print_divider
  prompt("You chose: #{choice}; Computer chose: #{computer_choice}")
  display_results(choice, computer_choice)
  if $player_score == 3
    print_pwins
    break
  elsif $computer_score == 3
    print_cwins
    break
  end

  play_again?
  answer = gets.chomp
  break unless answer.downcase.start_with?("y")
end
