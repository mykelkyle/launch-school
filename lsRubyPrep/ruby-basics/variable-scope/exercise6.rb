# What will the following code print, and why?

a = 7

def my_value(b)
  b = a + a
end

my_value(a)
puts a

# expected output: error
# undefined local variable or method "a" for main:Object (NameError)