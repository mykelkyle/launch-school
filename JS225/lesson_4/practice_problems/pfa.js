function greet(greeting, name) {
  let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  let message = capitalized + ", " + name + "!";
  console.log(message);
}

function partial(main, greeting) {
  return function (name) {
    return greet(greeting, name);
  };
}

let sayHello = partial(greet, "Hello");
let sayHi = partial(greet, "Hi");

sayHello("Brandon");
// Hello, Brandon!

sayHi("Sarah");
// Hi, Sarah!
