def get_input
  puts("Please write a word or multiple words:")
  gets.chomp
end

def count_chars(str)
  str.gsub(" ", "").length
end

# Could have used String#delete here: `input.delete(' ')`

def display_result(length, input)
  puts("There are #{length} characters in '#{input}'.")
end

input = get_input
chars = count_chars(input)
display_result(chars, input)
