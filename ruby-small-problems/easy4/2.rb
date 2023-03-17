def century(year)
  year = year.to_s
  beginning = ''
  if year.length < 3
    return '1st'
  elsif year.length < 4
    beginning = (year[0].to_i) + 1
  elsif year.length < 5
    if year[2, 4] == "00"
      beginning = year[0,2]
    else
      beginning = (year[0, 2].to_i) + 1
    end
  elsif year.length < 6
    beginning = (year[0, 3].to_i) + 1
  end

  ending =
  case beginning.to_s[-1]
  when "1"
    "st"
  when "2"
    "nd"
  when "3"
    "rd"
  else
    "th"
  end

  if (beginning.to_i > 9 && beginning.to_i < 20) || beginning.to_i > 109 && beginning.to_i < 120
    ending = "th"
  end

  beginning.to_s + ending
end

puts century(2000) == '20th'
puts century(2001) == '21st'
puts century(1965) == '20th'
puts century(256) == '3rd'
puts century(5) == '1st'
puts century(10103) == '102nd'
puts century(1052) == '11th'
puts century(1127) == '12th'
puts century(11201) == '113th'

# provided solution:

def century(year)
  century = year / 100 + 1
  century -= 1 if year % 100 == 0
  century.to_s + century_suffix(century)
end

def century_suffix(century)
  return 'th' if [11, 12, 13].include?(century % 100)
  last_digit = century % 10

  case last_digit
  when 1 then 'st'
  when 2 then 'nd'
  when 3 then 'rd'
  else 'th'
  end
end
