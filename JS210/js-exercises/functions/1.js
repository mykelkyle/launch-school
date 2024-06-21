var myVar = "This is global";

function someFunction() {
  var myVar = "This is local";
}

someFunction();
// console.log(myVar);

// "This is global"

function test_var() {
  var foo = 5;
}

test_var();
console.log(foo);
