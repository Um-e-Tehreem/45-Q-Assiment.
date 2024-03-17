"use strict";
//Question21:
// Think of something you could store in a typescript objects.
// Write a program that creates object containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
let Girl = {
    name: "Esha", fname: "female", age: 18
};
console.log(Girl);
let book = {
    tittle: "The Hobbit", author: "J.R.R.", yearPublished: 1937
};
console.log(`Book Info: ${book.tittle} by ${book.author}, published in 
${book.yearPublished}`);
