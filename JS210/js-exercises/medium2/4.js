function makeDoubler(caller) {
  return function (num) {
    console.log(`This function was called by ${caller}`);
    return num + num;
  };
}

const something = makeDoubler("Victor");
console.log(something(10));

const somethingElse = makeDoubler("Mykel");
console.log(somethingElse(20));
