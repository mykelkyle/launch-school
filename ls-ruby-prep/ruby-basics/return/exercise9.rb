# What will the following code print? Why? Don't run it until you've attempted to answer.


def count_sheep
  5.times do |sheep|
    puts sheep
    if sheep >= 2
      return
    end
  end
end

puts count_sheep

# expected output:

0
1
2
nil

# In this case, return does not provide a value. That's why the last output is nil (used #p when invoking count_sheep so that nil is visible in the output).