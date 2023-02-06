def prompt(message)
  puts "=> #{message}"
end

def number?(num)
  num.to_i.to_s == num || num.to_f.to_s == num
end

def line_break
  prompt("-" * 60)
end

def remove_comma(string)
  string.gsub(",", "")
end

def prompt_name
  prompt("Welcome to the Mortgage Calculator! Please enter your name: ")

  loop do
    name = gets.chomp
    if name.strip.empty?
      prompt("Make sure to enter a valid name.")
    else
      return prompt("Hi there, #{name}!")
    end
  end
end

def prompt_loan_amount
  loop do
    prompt("What is the loan amount?")
    input = gets.chomp
    loan_amount = remove_comma(input).to_i

    if number?(loan_amount.to_s) && loan_amount > 0
      return loan_amount
    else
      prompt("Invalid input, try again. Please enter a positive number.")
    end
  end
end

def prompt_apr
  loop do
    prompt("What is your APR%?")
    apr = gets.chomp.to_i

    if number?(apr.to_s) && apr >= 0
      return apr
    else
      prompt("Invalid input, try again. Please enter a positive number.")
    end
  end
end

def prompt_years
  loop do
    prompt("Years:")
    loan_duration_years = gets.to_i

    if number?(loan_duration_years.to_s) && loan_duration_years >= 0
      return loan_duration_years
    else
      prompt("Invalid input, try again. Please enter a positive number.")
    end
  end
end

def prompt_months
  loop do
    prompt("Months:")
    loan_duration_months = gets.to_i

    if number?(loan_duration_months.to_s) && (loan_duration_months < 12 &&
    loan_duration_months >= 0)
      return loan_duration_months
    else
      prompt("Invalid input, try again. Please enter a positive number.")
    end
  end
end

def calculate_duration
  loan_duration_years = prompt_years
  loan_duration_months = prompt_months
  if loan_duration_years == 0 && loan_duration_months == 0
    prompt("Invalid input, try again.
    Loan duration must be at least 1 month long.")
  else
    (loan_duration_years * 12) + loan_duration_months
  end
end

def display_results(loan_amount, apr, loan_duration)
  monthly_interest = calculate_monthly_interest(apr)
  monthly_payment = loan_amount * (monthly_interest / (1 -
  (1 + monthly_interest)**(-loan_duration)))

  if apr == 0
    monthly_payment = loan_amount / loan_duration
  end

  prompt("RESULTS:")
  prompt("Loan Amount: $#{format('%.2f', loan_amount.to_f)}")
  prompt("APR: #{apr}%")
  prompt("Loan Duration: #{loan_duration} months")
  prompt("Monthly Payment: $#{format('%.2f', monthly_payment.to_f)}")
end

def calculate_monthly_interest(apr)
  (apr.to_f / 100) / 12
end

def calculate_again?
  prompt("Would you like to perform another calculation? (Y to continue)")
  response = gets.chomp
  if response.downcase.start_with?('y')
    return true
  else
    return false
  end
end

# MAIN PROGRAM

line_break
prompt_name

loop do
  loan_amount = prompt_loan_amount
  apr = prompt_apr
  prompt("What is the loan duration? (Years/Months)")
  loan_duration = calculate_duration

  line_break
  display_results(loan_amount, apr, loan_duration)
  line_break

  break unless calculate_again?
end

line_break
prompt("Thank you for using the Mortgage Calculator! Goodbye!")
