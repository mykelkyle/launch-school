def prepend_zero(hour, minutes)
  hour.prepend("0") if hour.size < 2
  minutes.prepend("0") if minutes.size < 2
end

def convert_negative_input(hour)
  if hour[0] == "-"
    hour = 24 - hour.slice(1, hour.length).to_i
  end
  hour
end

def time_of_day(int)
  time = int.divmod(60)
  hour = time[0]
  hour = hour.divmod(24)[1].to_s
  minutes = time[1].to_s

  hour = convert_negative_input(hour).to_s
  prepend_zero(hour, minutes)


  full_time = "#{hour}:#{minutes}"
end

p time_of_day(-523000)
# examples and test cases
p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00" #
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29" #

# problem
# input: integer
# output: a string in hh:mm format

# take an integer to determine the exact amount of minutes before or after midnight (00:00)

# data structure

# array to contain the result of int.divmod(60)

# plug in arr[0] to represent hour and arr[1] to represent minutes

# algorithm
