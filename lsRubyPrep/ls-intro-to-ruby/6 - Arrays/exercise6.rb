# You run the following code...

names = ['bob', 'joe', 'susan', 'margaret']
names['margaret'] = 'jody'

# ...and get the following error message:

# TypeError: no implicit conversion of String into Integer
#   from (irb):2:in `[]='
#   from (irb):2
#   from /Users/username/.rvm/rubies/ruby-2.5.3/bin/irb:12:in `<main>'


# What is the problem and how can it be fixed?

# The issue is that you cannot pass in a string as an argument in an array. To search by index, you must pass an integer like this: names[3] = "Jody"