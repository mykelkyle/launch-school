def prompt(message)
  puts "=> #{message}"
end

def number?(num)
  num.to_i.to_s == num || num.to_f.to_s == num
end

def line_break
  prompt("-" * 60)
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
    loan_amount_input = gets.chomp
    if loan_amount_input.include?(",")
      prompt("Invalid input, try again. Please do not enter commas.
      (E.g. 1000 instead of 1,000)")
      next
    else
      loan_amount = loan_amount_input.to_i
    end

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
    apr = gets.to_i

    if number?(apr.to_s) && apr > 0
      return monthly_interest_rate = (apr.to_f / 100) / 12
    else
      prompt("Invalid input, try again. Please enter a positive number.")
    end
  end
end

def prompt_duration
  loop do
    prompt("What is the loan duration? (Years/Months)")
    prompt("Years:")
    loan_duration_years = gets.to_i

    if number?(loan_duration_years.to_s) && loan_duration_years >= 0
      loop do
        prompt("Months:")
        loan_duration_months = gets.to_i

        if number?(loan_duration_months.to_s) && (loan_duration_months < 12 &&
        loan_duration_months >= 0)
          if loan_duration_years == 0 && loan_duration_months == 0
            prompt("Invalid input, try again. Loan duration must be at least 1 month long.")
          else
            return loan_duration = (loan_duration_years * 12) + loan_duration_months
          end
        else
          prompt("Invalid input, try again.
      Please enter a number between 0 and 11.")
        end
      end
    else
      prompt("Invalid input, try again. Please enter a positive number.")
    end
  end
end

line_break
prompt_name

# MAIN LOOP

loop do
  loan_duration_years = ''
  loan_duration_months = ''

  loan_amount = prompt_loan_amount
  apr = prompt_apr
  loan_duration = prompt_duration


  monthly_payment = loan_amount * (apr / (1 -
  (1 + apr)**(-loan_duration)))

  # Total cost & Total interest -----------

  total_cost = monthly_payment * loan_duration

  total_interest = total_cost - loan_amount

  # Results -----------
  line_break
  prompt("Monthly payment: $#{(format '%.2f', monthly_payment.to_f)}")
  prompt("Total cost: $#{format('%.2f', total_cost.to_f)}")
  prompt("Total interest: $#{format('%.2f', total_interest.to_f)}")

  prompt("Would you like to perform another calculation? (Y to continue)")

  response = gets.chomp
  break unless response.downcase.start_with?('y')
end

line_break
prompt("Thank you for using the Mortgage Calculator! Goodbye!")
