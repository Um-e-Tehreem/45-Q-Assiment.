"use strict";
// Question18:
// Seeing The World:think of at least five places you'd like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
let placeTovisit = ["Pakistan", "Southkorea", "SaudiArabia", "America", "Turkey"];
// print the away in this original order.
console.log("original order:", placeTovisit);
// print the array in albhabetical order without modifiying the actual list.
console.log("Alphabetical order:", [...placeTovisit].sort());
// show that the arrayis still in its original order.
console.log("original order after sorting:", placeTovisit);
// print the array in reverse alphabetical order without changing the order of the original list.
console.log("reverse albhabetical order:", [...placeTovisit].sort().reverse());
// show that the array is still in its original order.
console.log("original order after reverse sorting:", placeTovisit);
// reversethe order of the list.
console.log("Reversed order:", placeTovisit);
// reverse the order of the list again to get back to the oiginal order.
placeTovisit.reverse();
console.log("back to original order:", placeTovisit);
// sort the array in alphabetical order.
placeTovisit.sort();
console.log("sorted in alphabetical order:", placeTovisit);
// sort the array in reverse alphabetical order.
placeTovisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", placeTovisit);
