function invoiceTotal(...args) {
  return args.reduce((acc, v) => acc + v);
}

console.log(invoiceTotal(20, 30, 40, 50)); // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40)); // does not work; how can you make it work?
