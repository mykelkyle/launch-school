# Look at Ruby's merge method. Notice that it has two versions. What is the difference between merge and (merge!)? Write a program that uses both and illustrate the differences.

# The difference between merge and merge! methods is that merge! permanently mutates the original hash while merge creates a new copy of the hash. 

# e.g. non-destructive merge

hash = {
  this: 10,
  is: 20,
  a: 30,
  test: 40
}

different_hash = {
  this: 20,
  is: 30,
  also: 40,
  a: 50,
  test: 60
}

p hash.merge(different_hash)
p hash
# expected return value of hash.merge(different_hash) = {:this=>20, :is=>30, :a=>50, :test=>60, :also=>40}
# however, the value of the original hash is still the same.

# whereas for merge!, the returned value of hash after calling hash.merge!(different_hash) would be permanently changed.

p hash.merge!(different_hash)
p hash

# now the expected outcome of hash is {:this=>20, :is=>30, :a=>50, :test=>60, :also=>40}
