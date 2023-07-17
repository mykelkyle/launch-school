def show_multiplicative_average(arr)
  avg = (arr.inject(:*).to_f / arr.length.to_f).round(3)
  str_avg = avg.to_s.split(".")
  if str_avg[1].size != 3
    str_avg[1] << "00"
  end
  str_avg.join(".")
end



# test cases:

p show_multiplicative_average([3, 5])                # => The result is 7.500
p show_multiplicative_average([6])                   # => The result is 6.000
p show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667
