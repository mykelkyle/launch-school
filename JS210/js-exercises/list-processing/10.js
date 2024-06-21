function transactionsFor(item, list) {
  return list.filter(({ id }) => id === item);
}

function isItemAvailable(id, list) {
  let transactions = transactionsFor(id, list);
  let sum = 0;

  transactions.forEach((transaction) => {
    if (transaction.movement === "in") {
      sum += transaction.quantity;
    } else {
      sum -= transaction.quantity;
    }
  });

  console.log(sum > 0);
}

const transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 15 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

isItemAvailable(101, transactions); // false
isItemAvailable(105, transactions); // true
