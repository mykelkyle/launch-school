def get_bill
  puts("What is the bill?")
  gets.to_f
end

def get_tip_rate
  puts("What is the tip percentage?")
  gets.to_f / 100
end

bill = get_bill
tip_rate = get_tip_rate
tip = bill * tip_rate

puts("The tip is $#{sprintf('%.2f', tip)}")
puts("The total is $#{sprintf('%.2f', tip + bill)}")
