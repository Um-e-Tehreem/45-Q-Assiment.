"use strict";
// Question: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
// make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
let magicians1 = ["ainak wala jin", "ram", "hatoba"];
function goodMagicians(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = magicians1[i] + " the best ";
    }
}
function showMagicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
goodMagicians(magicians1);
showMagicians(magicians1);
