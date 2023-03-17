# def multisum(int)
#   arr =* 1..int
#   sum = 0
#   arr.each {|i| sum += i if (i % 3 == 0 || i % 5 == 0)}
#   sum
# end

# version which uses #inject
# pass in 0 as an argument to set accumulator to 0
# use ternary operator to return sum when block evaluates false

def multisum(int)
  1.upto(int).inject(0) do |sum, num|
    (num % 3 == 0 || num % 5 == 0) ? sum + num : sum
  end
end


# puts multisum(3) == 3
# puts multisum(5) == 8
# puts multisum(10) == 33
# puts multisum(1000) == 234168
