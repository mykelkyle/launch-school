require "pry"

CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"]
BLACKJACK = 21

def divider
  puts "-" * 40
end

def prompt(msg)
  puts "=> #{msg}"
end

def initialize_deck
  CARDS.product(SUITS).shuffle
end

def deal_cards(deck, player)
  loop do
    card = deck.pop
    suit = card[1]
    player[suit] ||= []
    player[suit] << card[0]
    break unless player.values.flatten.length < 2
  end
end

def human_hit_card?
  answer = ""
  loop do
    prompt "Hit or stay? (h/s)"
    answer = gets.chomp.downcase
    return true if answer.start_with?("h")
    return false if answer.start_with?("s")
    prompt "Invalid answer, try again."
  end
end

def dealer_hit_card?(hand)
  aggregate_total(hand) < 17
end

def display_cards(hand, player)
  divider
  prompt "#{player}'s Cards:"
  hand.each do |suit, values|
    values.each { |value| prompt "#{value} of #{suit}" }
  end
  prompt "Total: #{[aggregate_total(hand)]}"
end

def aggregate_total(hand)
  hand.values.flatten.map do |value|
    case value
    when "Jack", "Queen", "King"
      10
    when "Ace"
      sum = hand.values.flatten.sum { |v| v.is_a?(Integer) ? v : 0 }
      sum + 11 > BLACKJACK ? 1 : 11
    else
      value
    end
  end.sum
end

def busted?(hand)
  aggregate_total(hand) > BLACKJACK
end

def play_again?
  answer = ""
  loop do
    prompt "Game over! Would you like to play again? (y/n)"
    answer = gets.chomp.downcase
    return true if answer.start_with?("y")
    return false if answer.start_with?("n")
    prompt "Invalid answer, please enter 'y' or 'n'."
  end
end

def blackjack?(hand)
  aggregate_total(hand) == BLACKJACK
end

def announce_busted(player)
  if player == "Dealer"
    prompt "The dealer busted. You win!"
  else
    prompt "You busted. You lose!"
  end
end

def announce_blackjack(player)
  if player == "Dealer"
    prompt "The dealer has blackjack. You lose!"
  else
    prompt "You have blackjack. You win!"
  end
end

def ask_player_name
  name = ""
  loop do
    prompt "Please enter your name:"
    name = gets.chomp.strip
    break unless name.empty?
    prompt "Invalid input. Please enter a valid name."
  end
  name
end

def greeting(name)
  prompt "Welcome to Twenty-One, #{name}!"
end

def announce_stay
  prompt "You chose to stay!"
end

def announce_winner(winner, human_total, dealer_total)
  if winner == "Dealer"
    prompt "#{winner} had #{human_total} and the dealer
    had #{dealer_total}. Dealer wins!"
  elsif winner == "Tie"
    prompt "#{winner} had #{human_total} and the dealer
    had #{dealer_total}. It's a tie!"
  else
    prompt "#{winner} had #{human_total} and the dealer
    had #{dealer_total}. #{winner} wins!"
  end
end

def determine_winner(human, dealer, name)
  human_total = aggregate_total(human)
  dealer_total = aggregate_total(dealer)

  if human_total > dealer_total
    announce_winner(name, human_total, dealer_total)
  elsif dealer_total > human_total
    announce_winner("Dealer", human_total, dealer_total)
  else
    announce_winner("Tie", human_total, dealer_total)
  end
end

def continue?
  loop do
    prompt "Enter 'c' to continue"
    answer = gets.chomp.downcase
    return true if answer.start_with?("c")
    prompt "Invalid response. Please enter 'c' to continue."
  end
end

def goodbye(name)
  prompt "Goodbye! Thanks for playing, #{name}!"
end

# MAIN GAME LOOP
name = ask_player_name
greeting(name)
dealer_name = "Dealer"

loop do
  human_hand = {}
  dealer_hand = {}
  deck = initialize_deck

  # PLAYER TURN
  loop do
    deal_cards(deck, human_hand)
    display_cards(human_hand, name)

    if busted?(human_hand)
      announce_busted(name)
      break
    elsif blackjack?(human_hand)
      announce_blackjack(name)
      break
    end

    if !human_hit_card?
      # DEALER TURN
      announce_stay
      continue?
      while aggregate_total(dealer_hand) < 17
        deal_cards(deck, dealer_hand)
      end
      display_cards(dealer_hand, dealer_name)

      if busted?(dealer_hand)
        announce_busted(dealer_name)
      elsif blackjack?(dealer_hand)
        announce_blackjack(dealer_name)
      else
        determine_winner(human_hand, dealer_hand, name)
      end
      break
    end
  end

  break if !play_again?
end

goodbye(name)
