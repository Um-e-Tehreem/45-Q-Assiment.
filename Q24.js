"use strict";
// Question24:
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
//* Tests for equality and inequality with strings
// * Tests using the lower case function
// * Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// * Tests using "and" and "or" operators
// * Test whether an item is in a array
// * Test whether an item is not in a array
// Ans:
// String Tests
let str = 'hello';
console.log("is str == 'hello'? i predict True");
console.log(str == 'hello'); //True
let str1 = 'hello';
console.log("is str1 == 'Hello'? i predict False");
console.log(str1 == 'Hello'); //False
// (case sensitive)
let str2 = 'hello';
console.log("is str2.toLowerCase() == 'hello'? i predict True");
console.log(str2.toLowerCase() == 'hello'); // True
// Numerical Tests
let num = 5;
console.log("is num == 5? i predict True");
console.log(num == 5); //True
let num1 = 5;
console.log("is num1 >= 5? i predict False");
console.log(num1 > 10); //False
let num2 = 5;
console.log("is num2 >= 5? i predict True");
console.log(num2 >= 5); //True
let num3 = 5;
console.log("is num3");
console.log(num3 < 10); //True
let num4 = 5;
console.log("is num4 <= 5? i predict True");
console.log(num4 <= 5);
// Logical Opertor Tests
let isAdmin = true;
let isModerator = false;
console.log("is isAdmin && ismoderator? i predict False");
console.log(isAdmin && isModerator); //False
let isAdmin1 = true;
let isModerator2 = false;
console.log("is isAdmin1 || ismoderator2? i predict True");
console.log(isAdmin || isModerator); //True
let array = [1, 2, 3];
console.log("is 2 in array? i predict True");
console.log(array.includes(2)); // True
let array1 = [1, 2, 3];
console.log("is 4 in array1? i predict False");
console.log(array1.includes(4)); //False
