"use strict";
// Question12:
// Greeting:use the array from exercise 11.Instead of just printing each person's name,
// print a message to them.the msg should be the same for each person,but personlized with thier name.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
let array = ["rubab", "esha", "muskan"];
for (let name of array) {
    console.log(`Hello ${name}, how are you?`);
}
;
