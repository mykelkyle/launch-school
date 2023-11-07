class Diamond
  ALPHA = ("A".."Z").to_a

  def self.make_diamond(letter)
    index = ALPHA.find_index(letter)
    acc = 0
    spaces = index
    row = 0
    first_or_last_row = true

    while acc < index + 1
      if first_or_last_row
        puts (" " * spaces) + ALPHA[acc] + (" " * row)
        first_or_last_row = false
      else
        puts (" " * spaces) + ALPHA[acc] + (" " * row) + (" " * (row - 1)) + ALPHA[acc]
      end

      break if acc == index
      acc += 1
      spaces -= 1
      row += 1
    end

    while acc > 0
      first_or_last_row = true if acc == 1
      spaces += 1
      row -= 1

      if first_or_last_row
        puts (" " * spaces) + ALPHA[acc - 1]
      else
        puts (" " * spaces) + ALPHA[acc - 1] + (" " * row) + (" " * (row - 1)) + ALPHA[acc - 1]
      end
      acc -= 1
    end
  end
end

Diamond.make_diamond("D")
