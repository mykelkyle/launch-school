require "yaml"
MESSAGES = YAML.load_file("calculator_messages.yml")

def prompt(message)
  puts "=> #{message}"
end

def number?(num)
  num.to_i.to_s == num || num.to_f.to_s == num
end

def operation_to_message(operator)
  word = case operator
  when "1"
    return "Adding"
  when "2"
    return "Subtracting"
  when "3"
    return "Dividing"
  when "4"
    return "Multiplying"
  end
end

prompt(MESSAGES["welcome"])

name = ''
loop do
  name = gets.chomp
  if name.empty?
    prompt(MESSAGES["valid_name"])
  else
    break
  end
end

first_operand = ''
second_operand = ''

prompt("Hi #{name}!")

loop do # main loop
  loop do
    prompt(MESSAGES["first_input"])
    first_operand = gets.chomp

    if number?(first_operand)
      break
    else
      prompt(MESSAGES["invalid_input"])
    end
  end

  loop do
    prompt(MESSAGES["second_input"])
    second_operand = gets.chomp

    if number?(second_operand)
      break
    else
      prompt(MESSAGES["invalid_input"])
    end
  end

  operator_prompt = <<-MSG
    What operation would you like to perform?
    1) Add
    2) Subtract
    3) Divide
    4) Multiply
  MSG

  prompt(operator_prompt)

  operator = ''
  loop do
    operator = gets.chomp

    if %w(1 2 3 4).include?(operator)
      break
    else
      prompt(MESSAGES["must_choose"])
    end
  end

  prompt("#{operation_to_message(operator)} the two numbers...")

  answer =
    case operator
    when "1"
      first_operand.to_f + second_operand.to_f
    when "2"
      first_operand.to_f - second_operand.to_f
    when "3"
      first_operand.to_f / second_operand.to_f
    when "4"
      first_operand.to_f * second_operand.to_f
    end

  prompt("The answer is #{answer}.")

  prompt(MESSAGES["try_again"])
  response = gets.chomp
  break unless response.downcase.start_with?('y')
end
