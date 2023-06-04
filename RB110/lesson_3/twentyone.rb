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
  # if player.empty?
  #   2.times do
  #     card = deck.pop
  #     player.store(card[1], card[0])
  #   end
  # else
  #   card = deck.pop
  #   player.store(card[1], card[0])
  # end
end

def hit_card?
  answer = ""
  loop do
    prompt "Hit or stay? (h/s)"
    answer = gets.chomp.downcase
    return true if answer.start_with?("h")
    return false if answer.start_with?("s")
    prompt "Invalid answer, try again."
  end
end

def display_cards(hand, player)
  divider
  prompt "#{player} Cards:"
  hand.each { |k, v| prompt "#{v} of #{k}" }
  prompt "#{[aggregate_total(hand)]}"
end

def aggregate_total(hand)
  sum = 0
  hand.values.each do |cards|
    cards.each do |value|
      case value
      when "Jack", "Queen", "King"
        value = 10
      when "Ace"
        value = if sum + 11 > BLACKJACK
              1
            else
              11
            end
      end
      sum += value
    end
  end
  sum
end

# MAIN GAME LOOP
human = {}
dealer = {}
deck = initialize_deck
deal_cards(deck, human)
deal_cards(deck, dealer)
display_cards(human, "Your")

loop do
  break unless hit_card?
  deal_cards(deck, human)
  display_cards(human, "Your")
end
