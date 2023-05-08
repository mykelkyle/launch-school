require "pry"

WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # columns
                [[1, 5, 9], [3, 5, 7]]              # diagonals

INITIAL_MARKER = " "
PLAYER_MARKER = "X"
COMPUTER_MARKER = "O"

def prompt(msg)
  puts "=> #{msg}"
end

def joinor(options)
  empty = empty_squares(options)
  return empty[0].to_s if empty.length == 1
  empty[0..-2].join(", ") + ", or " + empty[-1].to_s
end

# rubocop:disable Metrics/AbcSize
def display_board(brd)
  system "clear"
  puts ""
  puts "     |     |"
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}"
  puts "     |     |"
  puts ""
end
# rubocop:enable Metrics/AbcSize

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(board)
  board.keys.select { |num| board[num] == INITIAL_MARKER }
end

def player_places_piece!(board)
  square = ""
  loop do
    prompt "Choose a position to place a piece: #{joinor(board)}"
    square = gets.chomp.to_i
    break if empty_squares(board).include?(square)
    prompt "Sorry, that's not a valid choice."
  end

  board[square] = PLAYER_MARKER
end

def computer_places_piece!(board)
  if find_winning_square(board).size == 1    # attacks
    square = find_winning_square(board)[0]
  elsif find_at_risk_square(board).size == 1 # defends
    square = find_at_risk_square(board)[0]
  else                                       # random square
    square = empty_squares(board).sample
  end

  board[square] = COMPUTER_MARKER
end

def board_full?(board)
  empty_squares(board).empty?
end

def someone_won?(board, score)
  !!detect_winner(board, score)
end

def detect_winner(board, _score)
  WINNING_LINES.each do |line|
    if board.values_at(*line).count(PLAYER_MARKER) == 3
      return "Player"
    elsif board.values_at(*line).count(COMPUTER_MARKER) == 3
      return "Computer"
    end
  end
  nil
end

def grand_winner?(_board, score)
  score[0] == 5 || score[1] == 5
end

def display_score(score)
  prompt "Player: #{score[0]}"
  prompt "Computer: #{score[1]}"
end

def display_grand_winner(score)
  if score[0] == 5
    prompt "Player has reached 5 points, the game is over!"
  elsif score[1] == 5
    prompt "Computer has reached 5 points, the game is over!"
  end
end

def find_at_risk_square(board)
  WINNING_LINES.each do |line|
    if board.values_at(*line).count(PLAYER_MARKER) == 2 &&
       board.values_at(*line).count(INITIAL_MARKER) == 1
      test = line.select { |num| board[num] == INITIAL_MARKER }
      return test
    end
  end
end

def find_winning_square(board)
  WINNING_LINES.each do |line|
    if board.values_at(*line).count(COMPUTER_MARKER) == 2 &&
       board.values_at(*line).count(INITIAL_MARKER) == 1
      test = line.select { |num| board[num] == INITIAL_MARKER }
      return test
    end
  end
end

# MAIN LOOP --------

score = [0, 0]
loop do
  board = initialize_board

  loop do
    display_board(board)

    player_places_piece!(board)
    break if someone_won?(board, score) || board_full?(board)

    computer_places_piece!(board)
    break if someone_won?(board, score) || board_full?(board)
  end

  display_board(board)

  if someone_won?(board, score)
    winner = detect_winner(board, score)
    winner == "Player" ? score[0] += 1 : score[1] += 1
    prompt "#{winner} won!"
  else
    prompt "It's a tie!"
  end

  display_score(score)

  break if grand_winner?(board, score)
  prompt "Press y to continue"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

display_grand_winner(score)
prompt "Thanks for playing Tic Tac Toe! Goodbye!"
