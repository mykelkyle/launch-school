"use strict";
function printId(id) {
    if (typeof id === "string") {
        console.log(`Your id is a string`);
    }
    else {
        console.log(`Your id is a number`);
    }
}
printId(101);
printId("202");