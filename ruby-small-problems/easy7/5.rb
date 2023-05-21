require "pry"

def staggered_case(str)
  test = str.chars.map.with_index do |char, index|
    if char.match?(/[[:alpha:]]/) && index.even? || index == 0
      char.upcase
    else
      char.downcase
    end
  end
  p test.join
end

# test cases:

p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
p staggered_case('ALL_CAPS') == 'AlL_CaPs'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'
