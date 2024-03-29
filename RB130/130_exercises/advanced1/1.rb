factorial = Enumerator.new do |yielder|
  accumulator = 1
  number = 0
  loop do
    accumulator = number.zero? ? 1: accumulator * number
    yielder << accumulator
    number += 1
  end
end

6.times {|number| puts "#{number}! == #{factorial.next}"}
puts "=" * 20
6.times {|number| puts "#{number}! == #{factorial.next}"}
puts "=" * 20
factorial.rewind
6.times {|number| puts "#{number}! == #{factorial.next}"}
puts "=" * 20


factorial.each_with_index do |value, number|
  puts "#{number}! == #{value}"
  break if number >= 5
end
