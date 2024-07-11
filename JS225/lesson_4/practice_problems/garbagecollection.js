let a = [1];

function add(b) {
  a = a.concat(b);
}

function run() {
  let c = [2];
  let d = add(c);
}

run();

/*
[1] is garbage collected at the end of line 4 due to reassignment of the variable a

[2] is garbage collected at the end of execution of the run() function

[1, 2] is garbage collected at the end of the program. Since `a` is a global variable, the reference to [1, 2] doesn't go away until JS discards the `a` variable at the end of the program

*/

function makeHello(names) {
  return function () {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);

/*
Only when the program ends

line 5 - nothing
line 10 - ['this is an array']
*/
