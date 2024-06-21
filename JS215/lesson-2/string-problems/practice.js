let firstName = "Mykel";
let lastName = "Murphy";
let fullName = `${firstName} ${lastName}`;

let language = "JavaScript";
let idx = language.indexOf("S");
let charCode = language.charCodeAt(idx);

let a = "a";
let b = "B";

// console.log(language.slice(1, -1));
// console.log(language.slice(2, -1));

// console.log(language.substring(1, -1));
// console.log(language.substring(2, -1));

let fact1 = "Javascript is fun";
let fact2 = "Kids like it too";

let compoundSentence = `${fact1} and ${fact2.toLowerCase()}`;

let pi = String(22 / 7);

let boxNumber = String(parseInt((356).toString(), 10));

let name = prompt("What is your name?");

if (name.endsWith("!")) {
  name = name.slice(0, -1);
  console.log("HELLO " + name.toUpperCase() + ". WHY ARE WE SCREAMING?");
} else {
  console.log("Hello " + name + ".");
}
