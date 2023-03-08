# Given the following code...

x = "hi there"
my_hash = {x: "some value"}
my_hash2 = {x => "some value"}

# What's the difference between the two hashes that were created?

p my_hash
p my_hash2

# in my_hash, the key assigned to "some value" is a symbol, so the output of the hash is {x => "some value"}

# however, in my_hash2, the key assigned to "some value" was not a symbol, but a variable that was declared globally. Because of this, the output of the hash is {"hi there" => "some value"}