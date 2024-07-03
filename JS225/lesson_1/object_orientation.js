function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice < 0) {
        return "New price is invalid.";
      }

      this.price = newPrice;
    },

    describeProduct() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, "Scissors", 8, 10);
let drill = createProduct(1, "Cordless Drill", 15, 45);

console.log(scissors.setPrice(-100));
console.log(scissors);
