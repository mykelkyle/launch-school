def fizzbuzz(num1, num2)
  arr=*(num1..num2)
  arr.each do |num|
    case
    when num % 3 == 0 && num % 5 == 0
      puts "FizzBuzz"
    when num % 3 == 0
      puts "Fizz"
    when num % 5 == 0
      puts "Buzz"
    else
      puts num
    end
  end
end

fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
