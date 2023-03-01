# Describe the difference between ! and ? in Ruby. And explain what would happen in the following scenarios:

# The ! is a 'Not' operator. ? is the ternary operator.






# 1. what is != and where should you use it?

# != is the "not equal" sign. You should use it when you are trying to confirm that two values are not equal. If the values are not equal, returns true.

# 2. put ! before something, like !user_name

# putting ! before a value reverses the logical state of the value. If the condition is true, the NOT operator would make it false.

# 3. put ! after something, like words.uniq!

# putting ! after certain methods such as uniq or upcase/downcase will turn them into their mutative versions. This is not true for all methods, however.

# 4. put ? before something

# Nothing

# 5. put ? after something

# putting ? after something will interpret the value as truthy or falsey. Based on this output, the code executes one of the two given statements. e.g. If Condition is true ? Then value X : Otherwise value Y

# 6. put !! before something, like !!user_name

# a single Not operator provides the reverse of the value, two Not operators will provide the reverse of the reverse. AKA, it turns any value into their boolean equivalent.
