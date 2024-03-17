//Question21:
// Think of something you could store in a typescript objects.
// Write a program that creates object containing these items.

// Ans:
let Girl:{name:string; fname:string; age:number} = {
    name:"Esha", fname: "female", age:18
};
console.log(Girl);

let book: { tittle: string; author: string; yearPublished: number} = {
    tittle: "The Hobbit" , author: "J.R.R." , yearPublished: 1937
};
console.log(`Book Info: ${book.tittle} by ${book.author}, published in 
${book.yearPublished}`);