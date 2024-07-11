function newStack() {
  let array = [];

  return {
    push(value) {
      array.push(value);
    },

    pop() {
      return array.pop();
    },

    printStack() {
      array.forEach((val) => console.log(val));
    },
  };
}
