DEGREE = "\xC2\xB0"
MINUTES_PER_DEGREE = 60
SECONDS_PER_MINUTE = 60
SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE

def dms(degrees_float)
  total_seconds = (degrees_float * SECONDS_PER_DEGREE).round
  degrees, remaining_seconds = total_seconds.divmod(SECONDS_PER_DEGREE)
  minutes, seconds = remaining_seconds.divmod(SECONDS_PER_MINUTE)
  format(%(#{degrees}#{DEGREE}%02d'%02d"), minutes, seconds)
end

# def dms(int)
# if int.to_s.include?(".")
#   nums = int.to_s.split(".")
#   converted = ((nums[1].to_f / 10) * 60)
#   degrees = nums[0]
#   minutes = converted.to_s.split(".")[0]
#   seconds = (converted.to_s.split(".")[1].to_f / 10 * 60).to_s.slice(0,2).to_i
#   seconds = "00" if seconds == 0
# else
#   degrees = int
#   minutes = "00"
#   seconds = "00"
# end
#   %(#{degrees}°#{minutes}'#{seconds}")
# end

# dms(76.73)

# test cases
p dms(30) == %(30°00'00")
p dms(76.73) == %(76°43'48")
p dms(254.6) == %(254°36'00")
p dms(93.034773) == %(93°02'05")
p dms(0) == %(0°00'00")
p dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

=begin
P - Take an integer and return a string formatted to show the int converted to an angle in degrees, minutes, and seconds
E - dms(76.73) == %(76°43'48")
D -
A -
if int.to_s includes (".")
  split int into two, demarcated by the decimal
  set degree = first number
  converted = second number times 60.to_s
  minutes = converted[0]
  seconds = converted split at the decimal, take second number * 60
else
  initialize degree to number
  minutes = 00
  seconds = 00
end
join degrees minutes and seconds, format properly
=end
