"use strict";
// Question27:
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// * If the alien is green, print a message that the player earned 5 points.
// * If the alien is yellow, print a message that the player earned 10 points.
// * If the alien is red, print a message that the player earned 15 points.
// * Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Ans:
// Version 1 (Green Alien):
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}
// Output:
// Player earned 5 points.
// Version 2 (Yellow Alien):
let alien_color1 = 'yellow';
if (alien_color1 === 'green') {
    console.log("Player earned 5 points.");
}
else if (alien_color1 === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (alien_color1 === 'red') {
    console.log("Player earned 15 points.");
}
// Output:
// Player earned 10 points.
// Version 3 (Red Alien):
let alien_color2 = 'red';
if (alien_color2 === 'green') {
    console.log("Player earned 5 points.");
}
else if (alien_color2 === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (alien_color2 === 'red') {
    console.log("Player earned 15 points.");
}
// Output:
// Player earned 15 points.
