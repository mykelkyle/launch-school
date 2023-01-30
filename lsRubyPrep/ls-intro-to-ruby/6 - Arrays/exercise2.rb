# What will the following programs return? What is the value of arr after each?

arr = ["b", "a"]
arr = arr.product(Array(1..3))
arr.first.delete(arr.first.last)

# arr.product combines arr with the parameter 1..3 so the returned arr becomes [["b", 1], ["b", 2], ["b", 3], ["a", 1], ["a", 2], ["a", 3]]. Then, line 5 targets the first indexed array within arr and then deletes the last element within thhat array. The resulting value of arr is [["b"], ["b", 2], ["b", 3], ["a", 1], ["a", 2], ["a", 3]]. 

arr = ["b", "a"]
arr = arr.product([Array(1..3)])
arr.first.delete(arr.first.last)

# The difference here is that the .product method passes in the full array [1, 2, 3] to each element in arr. Because of this, arr becomes [["b", [1, 2, 3]], ["a", [1, 2, 3]]]. The delete method has the same target and the resulting arr value is [["b"], ["a", [1, 2, 3]]]
