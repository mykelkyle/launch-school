# In the code below, boolean is randomly assigned as true or false.


boolean = [true, false].sample

# Write a ternary operator that prints "I'm true!" if boolean equals true and prints "I'm false!" if boolean equals false.


boolean ? puts("I'm true!") : puts("I'm false!")

# The ternary operator is most useful when there are simple conditions with only two possible outcomes. It reads like this:

# <condition> ? <result if true> : <result if false>