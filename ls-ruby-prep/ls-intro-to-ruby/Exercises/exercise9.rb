# Suppose you have a hash h = {a:1, b:2, c:3, d:4}

hash = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

# Get the value of key `:b`.

p hash[:b]

# Add to this hash the key:value pair `{e:5}`

hash[:e] = 5



# Remove all key:value pairs whose value is less than 3.5

hash.delete_if {|key, value| value < 3.5}

p hash