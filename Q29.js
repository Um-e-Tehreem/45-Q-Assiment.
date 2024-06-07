"use strict";
// Question:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
Object.defineProperty(exports, "__esModule", { value: true });
// * Make a array of your three favorite fruits and call it favorite_fruits.
// * Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Ans:
let favFrouite = ['strawberry', 'mango', 'peach', 'watermelon', 'banana'];
if (favFrouite.includes('strawberry')) {
    console.log("i really like strawberry");
}
else {
    console.log("i don't like strawberry");
}
if (favFrouite.includes('mango')) {
    console.log("i really like mango");
}
else {
    console.log("i don't like mango");
}
if (`${favFrouite[3]}` === 'peach') {
    console.log("i really like peach");
}
else {
    console.log("i don't like peach");
}
if (`${favFrouite[4]}` === 'watermelon') {
    console.log("i really like watermelon");
}
else {
    console.log("i don't like watermelon");
}
if (`${favFrouite[3]}` === 'pineapple') {
    console.log("i really like pineapple");
}
else {
    console.log("i don't like pineapple");
}
