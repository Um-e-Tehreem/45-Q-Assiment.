"use strict";
// Question6:
// Strippig names:Store a person's name, and include some whitespace chracter at the begining and end of the name.
// use "/t"(tab) and "/n" (new line) at least once, so the white space around yhe name is displayed.
// then print the name after strpping the whitespaces.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
var lastName = "\t\n tehreem \t\n"; //save the with whitespace.
console.log(lastName); //name with whitespace
console.log(lastName.trim()); //name without whitespace
