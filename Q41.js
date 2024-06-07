"use strict";
// Question: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
let magicians = ["ainak wala jin", "ram", "hatoba"];
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
show_magicians(magicians);
