def step(start_v, end_v, step)
  current_value = start_v

  loop do
    yield(current_value)
    break if current_value == end_v
    current_value += step
  end
end

step(1, 10, 3) { |v| puts "value = #{v}" }

# start -> 1
# end -> 10

# the return value of this method could possibly be:
# the current_value
# nil, or perhaps the last value returned by the block
