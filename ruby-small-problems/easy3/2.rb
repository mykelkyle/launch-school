def prompt(msg)
  puts "==> #{msg}"
end

def get_1st
  prompt("Enter the first number:")
  gets.to_i
end

def get_2nd
  prompt("Enter the second number:")
  gets.to_i
end

first = get_1st
second = get_2nd

prompt("#{first} + #{second} = #{first + second}")
prompt("#{first} - #{second} = #{first - second}")
prompt("#{first} * #{second} = #{first * second}")
prompt("#{first} / #{second} = #{first / second}")
prompt("#{first} % #{second} = #{first % second}")
prompt("#{first} ** #{second} = #{first ** second}")
