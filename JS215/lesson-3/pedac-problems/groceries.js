/*
Calculate the Total Price of Groceries
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

Notes
There might be a floating point precision problem in here...

PROBLEM
  - Take an array of objects, each object will represent a product with a defiend quantity and price
  - Return a number value (Integer or a float) that represents the total price of all the 'groceries'

INPUT
  - Array of objects

OUTPUT
  - A number

RULES
  - Argument is always going to be an array of objects
  - Array may hold 1 or more objects
  - Objects may have a quantity higher than 1, in which we need to modify the price

DATA STRUCTURES
  - Iterate over the array elements
  - For each object, make some type of computation

  - Essentially reducing

ALGORITHM
  - Iterate over the array with reduce (initialize the acc to 0)
    - retrieve the price of the current object and multiply it by its quantity
    - Return this value summed with the acc
*/

function getTotalPrice(groceries) {
  return groceries.reduce((totalPrice, obj) => {
    return (totalPrice += obj.price * obj.quantity);
  }, 0);
}

// Examples;
// 1 bottle of milk:
console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]));
// ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
);
// ➞ 4

// 3 bottles of milk:
console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }]));
// ➞ 4.5

// Several groceries:
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);
// ➞ 10.4

// Some cheap candy:
console.log(
  getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.1 },
    { product: "Lollipop", quantity: 1, price: 0.2 },
  ])
);
// ➞ 0.3
