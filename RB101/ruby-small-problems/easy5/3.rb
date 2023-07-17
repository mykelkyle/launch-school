def after_midnight(str)
  hrmm = str.split(":").map{|num| num.to_i}
  return 0 if hrmm[0] == 24
  minutes = (hrmm[0] * 60) + hrmm[1]
end

def before_midnight(str)
  hrmm = str.split(":").map{|num| num.to_i}
  return 0 if hrmm[0] == 24
  minutes = (hrmm[0] * 60) - hrmm[1]
end

# p before_midnight('12:34')

# test cases
p after_midnight('00:00') == 0
p after_midnight('12:34') == 754
p after_midnight('24:00') == 0
p before_midnight('00:00') == 0
p before_midnight('12:34') == 686
p before_midnight('24:00') == 0
