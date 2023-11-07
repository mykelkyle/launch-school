class PerfectNumber
    def self.classify(int)
    raise StandardError if int < 1

    divisor_sum = 0
    1.upto(int - 1) { |num| divisor_sum += num if int % num == 0}
    self.type(divisor_sum, int)
  end

  def self.type(divisor_sum, int)
    int == divisor_sum ? "perfect" : ((int < divisor_sum ? "abundant" : "deficient"))
  end
end

# int == divisor_sum ? "perfect" : ((int < divisor_sum ? "abundant" : "deficient"))

# p PerfectNumber.classify()
=begin
P -

E
D
A
C
=end
