function foo() {
  console.log(foo);
  console.log("function declaration");
}

(function bar() {
  console.log(bar);
  console.log("function expression");
})();

foo();
console.log(bar);
