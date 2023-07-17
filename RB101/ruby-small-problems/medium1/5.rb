def diamond(int)
  rows = int
  i = 1
  n = int - 2
  length = rows / 2

  int.times do
    if i <= int
      puts (" " * length) + ("*" * i)
      i += 2
      length -= 1 unless length == 0
    elsif i > int
      length += 1
      puts (" " * length) + ("*" * n)
      n -= 2
    end
  end

end

diamond(9)
=begin
Problem -
Take an integer and display a 4-pointed diamond in an n x n grid, where the n is the integer that is supplied as an argument

Rules -
Argument will always be an odd integer

Example -
diamond(1) =>

*
diamond(3) =>

 *
***
 *

Set up a loop up to the
Algorithm -

=end
