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
  prompt("Player Score: #{scores[0]}")
  prompt("Computer Score: #{scores[1]}")
end

def increment_pscore(scores)
  scores[0] += 1
  print_divider
  display_score(scores)
  print_divider
end

def increment_cscore(scores)
  scores[1] += 1
  print_divider
  display_score(scores)
  print_divider
end

def print_tie(scores)
  prompt("It's a tie!")
  print_divider
  display_score(scores)
  print_divider
end

def win?(player, computer)
  OUTCOMES[player.to_sym].include?(computer.to_s)
end

def display_results(player, computer, scores)
  if win?(player, computer)
    prompt("You won!")
    increment_pscore(scores)
  elsif win?(computer, player)
    prompt("Computer won!")
    increment_cscore(scores)
  else
    print_tie(scores)
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

def convert_shortcut(choice)
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

  scores = [0, 0]

  loop do
    choice = ""

    loop do
      display_choices
      choice = gets.chomp

      if VALID_CHOICES.include?(choice.to_sym)
        break
      elsif is_shortcut?(choice)
        choice = convert_shortcut(choice)
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
    display_results(choice, computer_choice, scores)
    if scores[0] == 3
      print_pwins
      break
    elsif scores[1] == 3
      print_cwins
      break
    end
  end
  play_again?
  answer = gets.chomp
  break unless answer.downcase.start_with?("y")
end

prompt("Thanks for playing, goodbye!")
