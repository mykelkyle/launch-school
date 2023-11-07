class RomanNumeral
  CONVERSION_TABLE = {
    "M" => 1000,
    "CM" => 900,
    "D" => 500,
    "CD" => 400,
    "C" => 100,
    "XC" => 90,
    "L" => 50,
    "XL" => 40,
    "X" => 10,
    "IX" => 9,
    "V" => 5,
    "IV" => 4,
    "I" => 1
  }

  attr_accessor :year

  def initialize(year)
    @year = year
  end

  def to_roman
    numerals = ""

    while year > 0
      CONVERSION_TABLE.each do |k, v|
        if year >= v
          numerals << k
          self.year -= v
          break
        end
      end
    end

    numerals
  end
end

=begin
Return the string length of the integer passed in
Based on the string length
=end
