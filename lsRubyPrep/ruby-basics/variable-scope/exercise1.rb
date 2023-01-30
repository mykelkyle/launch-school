# What will the following code print and why?

a = 7

def my_value(b)
  b += 10
end

my_value(a)
puts a

# expected output: 7

# Reassignment, including assignment operators like +=, does not mutate a variable; instead, it binds the variable to a new object. Since line 6 binds b to a new object, the object pointed to by a remains unchanged. Thu, a is still equal to 7 at the time of the puts.