require "pry"
ALPHA = ("a".."z").to_a

class Octal
  def initialize(num)
    if has_letter?(num)
      @num = "9"
    else
      @num = num.to_i.to_s
    end
  end

  def has_letter?(num)
    num.chars.any? {|char| ALPHA.include?(char.downcase)}
  end

  def to_decimal
    return 0 if @num.chars.any? {|n| n.to_i > 7}
    digits = @num.chars.reverse
    total = 0
    digits.each_with_index do |digit, i|
      total += ((digit.to_i) * 8**i)
    end

    total
  end
end

# p Octal.new("17").to_decimal #=> 15
# p Octal.new("130").to_decimal #=> 88
# p Octal.new("011").to_decimal
p Octal.new('234abc').to_decimal

=begin
Take a string argument
Return an integer that represents the number in base 8 octal notation

Take the string
Convert to an array of singular digits

Iterate over each digit in reverse and multiply it by 8 to the nth power (srarting from 0)

Return the sum as an integer
=end
