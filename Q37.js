"use strict";
// Question: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
// Ans:
function makingShirts(size = "large", message = "i love typescript") {
    console.log(`making a ${size} t-shirt with the message "${message}" printed on it `);
}
makingShirts();
makingShirts("medium", "mood off");
makingShirts("small", "i m on the way");
