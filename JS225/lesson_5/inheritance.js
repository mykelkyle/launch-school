// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a); // 1

// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;
// bar.a = 2;
// console.log(bar.a); // 2

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp; // 1
console.log(far.hasOwnProperty("myProp"));
