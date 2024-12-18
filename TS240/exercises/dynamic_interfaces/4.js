"use strict";
function printDataField(userData, key) {
    console.log(userData[key]);
}
const userData = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
};
printDataField(userData, "name");
// Output should be "Alice"
printDataField(userData, "age");
// Output should be 25
