def compute(arg=nil)
  if block_given?
    yield(arg)
  else
    "Does not compute."
  end
end

p compute(2) {|v| 5 + 3 + v} == 10
p compute { 'a' + 'b' } == 'ab'
p compute("string") {|v| "This is a #{v}."} == "This is a string."
p compute("nothing") == "Does not compute."
p compute == "Does not compute."
