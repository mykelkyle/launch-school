def staggered_case(str)
  result = ""
  need_upper = true
  str.chars.each do |char|
    if need_upper
      result += char.upcase
    else
      result += char.downcase
    end
    need_upper = !need_upper if char.match?(/[[:alpha:]]/)
  end
  result
end

# test cases:

p staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS') == 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'

# ignore non-alphabetical letters when determining uppercase/lowercasing each letter
