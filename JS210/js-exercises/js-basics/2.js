const myBoolean = true;
const myString = "hello";
const myArray = [];
const myOtherString = "";

if (myBoolean) {
  console.log("Hello"); // "Hello"
}

if (!myString) {
  console.log("World"); // No Output
}

if (!!myArray) {
  console.log("World"); // "World"
}

if (myOtherString || myArray) {
  console.log("!"); // "!"
}
