# What will the following code print? Why? Don't run it until you've attempted to answer.


def tricky_number
  if true
    number = 1
  else
    2
  end
end

puts tricky_number

# expected output:

1

# Prints the return value of tricky_number by prepending #puts when invoking the method. The assignment to number is usless because it's not used anywhere else. However, variable assignment still returns the value that was assigned to the variable. It works the same as if the assignment wasn't even there. 

# The if statement has a conditional of true which means that the if statement will be evaluated everyt ime. Since we know that the else clause will be ignored, we can safely determine that the return value will be 1 because it's the only evaluated value in the if clause. 
