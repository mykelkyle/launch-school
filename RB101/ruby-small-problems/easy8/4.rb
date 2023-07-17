def palindromes(str)
  substrings = substrings(str)
  substrings.reject! {|substring| substring != substring.reverse || substring.size < 2}
  substrings
end

def substrings(str)
  result = []
  i = 0
  str.size.times do
    0.upto(str.size - 1) do |index|
      result << str[i..index]
    end
    i += 1
  end
  result.reject(&:empty?)
end



p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]
