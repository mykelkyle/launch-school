# Given the hash below

flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }

# Turn this into an array containing only two elements: Barney's name and Barney's number

# solution

test = []

test << flintstones.key(2)
test << flintstones["Barney"]

p test

# better solution

flintstones.assoc("Barney")
