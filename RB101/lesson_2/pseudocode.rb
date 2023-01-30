# a method that returns the sum of two integers

start
define method 
take two integers as parameters
add paramter1 with parameter2
end

# a method that takes an array of strings, and returns a string that is all those strings concatenated together

start 
define method 
take array as parameter
use array method join to concat, use a space to separate each word
end

# a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

every_other([1,4,7,2,5]) # => [1,7,5]

start
define method
take array as parameter
iterate over array, starting from index 0
since every index we want to skip is even, we can skip each loop in which the iterator is even
for each successful loop, push value into new array
return array
end

# a method that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the method should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return nil.

start
define method
take a full string as parameter (e.g. "axbxcdxex")
also take a single character string (e.g. "x") and set given_letter variable to 0
split string into individual characters in an array
iterate through each character in the array
add 1 to given_letter whenever the current index is equal to the second parameter
stop when the given_letter variable == 3
return index position of current iteration 
if given_letter does not reach 3, then return nil
end

# a method that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

merge([1, 2, 3], [4, 5, 6]) # => [1, 4, 2, 5, 3, 6]

start
define method
take two arrays as parameters
set iterator to 0
set empty array new_array
until iterator == array1.size
iterate through both arrays 
if array1[iterator] index is even then push current index to new_array else next
if array2[iterator] index is odd then push current index to new_array else next
iterator += 1
return new_array
end
