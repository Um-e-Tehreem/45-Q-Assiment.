"use strict";
// Question15:
// Changing Guest List: One of your guests can't make it to the dinner,
// so you need to send out a new set of invitation with a replacement guest.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
// Guest array.
let guestArray = ["Anum", "Hina", "Rukhsaar", "Anila"];
// Guest can not attend.
let cannotAttend = "Anum";
console.log(cannotAttend, "can not attend the dinner toinght."); // cant make dinner.
// Replace the guest.
let newGuest = ("Mehak");
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
// New initation.
guestArray.forEach(guestArray => {
    console.log(`dear ${guestArray}, "I am inviting you to have dinner with me."`);
});
