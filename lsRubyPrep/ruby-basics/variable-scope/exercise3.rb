# What will the following code print, and why?

a = 7

def my_value(b)
  a = b
end

my_value(a + 5)
puts a

# expected output: 7