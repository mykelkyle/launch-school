# Every object in Ruby has access to a method called object_id, which returns a numerical value that uniquely identifies the object. This method can be used to determine whether two variables are pointing to the same object.

# Take a look at the following code and predict the output:

a = "forty two"
b = "forty two"
c = a

puts a.object_id
puts b.object_id
puts c.object_id

# a & c's object_id = 60 while b's object_id = 80.
# When you run the code, the exact object_ids may differ; however, the output should make it clear that a and b reference different objects. The two objects look the same (i.e., they both have the same value 'forty two') but they are still different objects.

# Meanwhile, the object ids show that a and c reference the same object. This is because c was initialized to the object referenced by a.

# Object ids are a private implementation detail of how Ruby executes the code 'under hood', and may differ depending on your specific environment, Ruby version, etc. There's no guarantee that an object will have the same object id in two different runs of the program, so never rely on the specific value of the id.
