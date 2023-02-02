def prompt(message)
  puts "=> #{message}"
end

def number?(num)
  num.to_i.to_s == num || num.to_f.to_s == num
end

def line_break
  prompt("-" * 60)
end

prompt("Welcome to the Mortgage Calculator! Please enter your name:")
line_break

name = ''
loop do
  name = gets.chomp
  if name.empty?
    prompt("Make sure to enter a valid name.")
  else
    break
  end
end

prompt("Hi there, #{name}!")

loop do
  loan_amount = ''
  apr = ''
  loan_duration_years = ''
  loan_duration_months = ''

  loop do
    prompt("What is the loan amount?")
    loan_amount = gets.chomp.to_i

    if number?(loan_amount.to_s) && loan_amount > 0
      break
    else
      prompt("Invalid input, try again.")
    end
  end

  loop do
    prompt("What is your APR?")
    apr = gets.to_i

    if number?(apr.to_s) && apr > 0
      break
    else
      prompt("Invalid input, try again.")
    end
  end

  monthly_interest_rate = (apr.to_f / 100) / 12

  loop do
    prompt("What is the loan duration? (Years/Months)")
    prompt("Years:")
    loan_duration_years = gets.to_i

    if number?(loan_duration_years.to_s) && loan_duration_years > 0
      break
    else
      prompt("Invalid input, try again.")
    end
  end

  loop do
    prompt("Months:")
    loan_duration_months = gets.to_i

    if number?(loan_duration_months.to_s) && (loan_duration_months >= 0 &&
    loan_duration_months < 12)
      break
    else
      prompt("Invalid input, try again.")
    end
  end

  loan_duration = (loan_duration_years * 12) + loan_duration_months

  monthly_payment = loan_amount * (monthly_interest_rate / (1 -
  (1 + monthly_interest_rate)**(-loan_duration)))

  total_cost = monthly_payment * loan_duration

  total_interest = total_cost - loan_amount

  line_break
  prompt("Monthly payment: $#{(format'%.2f', monthly_payment.to_f)}")
  prompt("Total cost: $#{format('%.2f', total_cost.to_f)}")
  prompt("Total interest: $#{format('%.2f', total_interest.to_f)}")

  prompt("Would you like to perform another calculation? (Y to continue)")
  response = gets.chomp
  break unless response.downcase.start_with?('y')
end

line_break
prompt("Thank you for using the Mortgage Calculator, #{name}!")
