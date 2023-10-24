birds = ["raven", "finch", "hawk", "eagle"]

def assign(arr)
  yield(arr)
end

assign(birds) do |_, _, *raptors|
  puts "Raptors: #{raptors.join(", ")}"
end
