require "pry"

class Participant
  attr_reader :name, :busted, :blackjack
  attr_accessor :hand, :deck

  def initialize(deck)
    @hand = Hand.new
    @deck = deck
    @stay = false
    @busted = false
    @blackjack = false
  end

  def hit(name)
    puts "#{name} hits!"
    hand.cards << deck.cards.pop
  end

  def stay(name)
    puts "#{name} stays!"
    @stay = true
  end

  def stay?
    @stay
  end

  def twenty_one?
    @blackjack = true if hand.total == 21
  end

  def over_twenty_one?
    @busted = true if hand.total > 21
  end
end

class Player < Participant
  def initialize(deck)
    super(deck)
    @name = ask_player_name
  end

  def ask_player_name
    system "clear"
    name = ""
    loop do
      puts "Please enter your name:"
      name = gets.chomp.strip
      break unless name.empty? || name.start_with?(" ")
      puts "Invalid input. Please enter a valid name."
    end
    name
  end
end

class Hand
  attr_accessor :cards

  def initialize
    @cards = []
  end

  def total
    sum = 0
    cards.each do |card|
      sum += case card[0]
             when "Jack", "Queen", "King"
               10
             when "Ace"
               sum + 11 > 21 ? 1 : 11
             else
               card[0].to_i
             end
    end
    sum
  end
end

class Dealer < Participant
  def initialize(deck)
    super(deck)
    @name = "The Dealer"
  end
end

class Deck
  attr_accessor :cards

  CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
  SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"]

  def initialize
    @cards = CARDS.product(SUITS).shuffle
  end

  def deal_cards(num_of_cards)
    num_of_cards.times { deck.pop }
  end
end

class Game
  attr_reader :human, :computer
  attr_accessor :deck

  def initialize
    @deck = Deck.new
    @human = Player.new(@deck)
    @computer = Dealer.new(@deck)
  end

  def deal_cards
    2.times do
      human.hand.cards << deck.cards.pop
      computer.hand.cards << deck.cards.pop
    end
  end

  def divider
    puts "-" * 40
  end

  def show_cards(player)
    clear
    puts "#{player.name}'s cards:"
    divider
    player.hand.cards.each do |card|
      puts "#{card[0]} of #{card[1]}"
    end
    puts "Total: #{player.hand.total}"
    divider
  end

  def clear
    system "clear"
  end

  def player_turn
    answer = nil
    loop do
      puts "Would you like to hit or stay? (h/s)"
      answer = gets.chomp.downcase
      break if ["h", "s"].include?(answer)
      puts "Invalid input. Answer must be 'h' or 's'."
    end

    if answer == "h"
      human.hit(human.name)
    else
      human.stay(human.name)
    end
  end

  def dealer_turn
    if computer.hand.total < 17
      computer.hit(computer.name)
    else
      computer.stay(computer.name)
    end
  end

  def show_result
    if human.busted
      puts "#{human.name} went over 21 and busted. #{human.name} loses!"
    elsif computer.busted
      puts "#{computer.name} went over 21 and busted. #{computer.name} loses!"
    elsif human.hand.total > computer.hand.total
      puts "#{human.name} has #{human.hand.total} and #{computer.name}
      has #{computer.hand.total}. #{human.name} wins!"
    elsif human.hand.total < computer.hand.total
      puts "#{human.name} has #{human.hand.total} and #{computer.name}
      has #{computer.hand.total}. #{computer.name} wins!"
    end
  end

  def display_goodbye_message
    puts "Thanks for playing 21, #{human.name}! Goodbye!"
  end

  def display_greeting_message
    puts "Welcome to 21, #{human.name}! Here are the rules:"
    puts "- Both participants are initially dealt 2 cards from a 52-card deck.
- The player takes the first turn, and can 'hit' or 'stay'.
- If the player busts, he loses. If he stays, it's the dealer's turn.
- The dealer must hit until his cards add up to at least 17.
- If he busts, the player wins. If both player and dealer stays,
then the highest total wins.
- If both totals are equal, then it's a tie, and nobody wins."
    continue?
  end

  def continue?
    puts ""
    puts "Press 'Enter' to continue"
    gets.chomp
  end

  def play_again?
    answer = ""
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp.downcase
      return true if answer.start_with?("y")
      return false if answer.start_with?("n")
      prompt "Invalid answer, please enter 'y' or 'n'."
    end
  end

  def busted?(player)
    return unless player.busted
    show_result
    display_goodbye_message
    true
  end

  def blackjack?(player)
    return unless player.blackjack
    show_result
    display_goodbye_message
    true
  end

  def player_loop
    loop do
      show_cards(human)
      break if human.over_twenty_one? || human.twenty_one?
      player_turn
      break if human.stay?
    end
  end

  def computer_loop
    loop do
      show_cards(computer)
      break if computer.over_twenty_one? || computer.twenty_one?
      dealer_turn
      continue?
      break if computer.stay?
    end
  end

  def start
    display_greeting_message
    deal_cards
    player_loop
    return if busted?(human) || blackjack?(human)
    continue?
    computer_loop
    return if busted?(computer) || blackjack?(computer)
    show_result
    display_goodbye_message
  end
end

Game.new.start
