"use strict";
//Question17:
// Shrinking Guest List:Unfortunately, your new table won't arrive in time,
// and you can invite only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
let guestList = ["Sameer", "Manahil", "Mehreen", "Shaheer", "Fizza"];
console.log("Lets celebrate my success in bigger dinner table!");
// adding more guest.
guestList.unshift("Waqar");
guestList.splice(guestList.length / 1, 0, "Maaz");
guestList.push("Mehak");
guestList.forEach(guestList => {
    console.log(`dear ${guestList} "would you like to celebrate my success?"`);
});
console.log("due to limited space, only two people can be invited for dinner");
//removing guest
while (guestList.length > 2) {
    let removedguests = guestList.pop(); //remove the last guest from the list
    console.log(`sorry, ${removedguests}, you're no longer invited for dinner.`);
}
;
//print invitation to the remaining 2 guests.
guestList.forEach(guestList => {
    console.log(`dear ${guestList} you're still invited to dinner.`);
});
guestList.splice(0, guestList.length);
console.log(guestList); //shows an empty list.
