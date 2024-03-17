"use strict";
//Question16:
//More Guest:you have found a bigger dinner table, so there's room for more guest.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
let guestList = ["Mehak", "Manahil", "Mehreen", "Shaheer", "Fizza"];
console.log("Lets celebrate my success in bigger dinner table!");
// adding more guest.
guestList.unshift("Sameer");
guestList.splice(guestList.length / 1, 0, "Maaz");
guestList.push("Waqar");
guestList.forEach(guestList => {
    console.log(`dear ${guestList} "would you like to celebrate my success?"`);
});
