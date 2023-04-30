def find_fibonacci_index_by_length(int)
  fib_numbers = [1, 1]

  loop do
    fib_numbers << fib_numbers.last + fib_numbers[-2]
    break if fib_numbers.last.to_s.length == int
  end
  fib_numbers.length
end

# def find_fibonacci_index_by_length(number_digits)
#   first = 1
#   second = 1
#   index = 2

#   loop do
#     index += 1
#     fibonacci = first + second
#     break if fibonacci.to_s.size >= number_digits

#     first = second
#     second = fibonacci
#   end

#   index
# end

=begin
P - Given an integer, find the first number in the fibonacci sequence that is equivalent to the number of digits ex. 2 = 10 (two digits), 3 = 123 (three digits)
inputs - integer
outputs - index of integer
requirements - You may assume that the argument is always greater than or equal to 2.
E - for the number 3 - looking for the first integer in the sequence that has 3 number of digits -- # 1 1 2 3 5 8 13 21 34 55 89 144 -- 12

find_fibonacci_index_by_length(3) == 12
# 1 1 2 3 5 8 13 21 34 55 89 144

D - Array to store fib sequence
A - * code up the fib sequence
      [1, 1, 2, 3, 5, 8]

      [1] << arr[currindex] + arr[index - 1]
      Continue iterating through fib sequence, checking the length of each number to see if it is equivalent to the length of the argument. If it is, then break the loop and return the index of the current number in the sequence.
C
=end


# Examples

p find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847
