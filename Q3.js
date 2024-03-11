"use strict";
// Q3: Name Cases: Store a persons name in a variable, and then print that persons name in lowercase,
// uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
var serName = "faiza";
console.log(serName.toLowerCase());
var userName = "FAIZA";
console.log(userName.toUpperCase());
var lastName = "Faiza";
console.log(lastName.charAt(0).toUpperCase() + serName.slice(1).toLowerCase());
