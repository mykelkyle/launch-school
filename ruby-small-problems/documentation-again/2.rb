def initialize_arr(n)
  i = 1
  light_switches = []
  while i <= n
    light_switches << i
    i += 1
  end
  light_switches
end

def toggle_lights(n)
  light_switches = initialize_arr(n)
  copy_arr = light_switches.clone

  round = 2
  while round <= n
    factor_arr = copy_arr.select do |el|
      el % round == 0
    end

    copy_arr.each do |el|
      if factor_arr.include?(el)
        if light_switches.include?(el)
          light_switches.delete(el)
          light_switches.sort!
        else
          light_switches << el
          light_switches.sort!
        end
      end
    end

    round += 1
  end

  p light_switches
end

toggle_lights(10000)

def light_flipper(n)
  lights = Hash.new(false)

  1.upto(n) do |i|
    flipper = i
    while flipper <= n
      lights[flipper] = !lights[flipper]
      flipper += i
    end
  end

  lights.select { |_, v| v }.keys
end

p light_flipper(1000000)
