"use strict";
function logUnknown(arg) {
    typeof arg === "string" && console.log(arg);
}
logUnknown("this is a string");
logUnknown(3);
