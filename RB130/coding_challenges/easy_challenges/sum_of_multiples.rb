class SumOfMultiples

  def initialize(int1=3, int2=5, int3=nil)
    @set = [int1, int2, int3]
    @set.reject! {|el| el == nil}
  end

  def self.to(num)
    SumOfMultiples.new.to(num)
  end

  def to(num)
    sum = 0
    0.upto(num - 1) do |i|
      sum += i if @set.any? {|int| i % int == 0}
    end
    sum
  end
end
