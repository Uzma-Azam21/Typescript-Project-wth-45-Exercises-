// Exercise - 3;
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let fullName: String= "uzma azam"
console.log(fullName.toLowerCase());

console.log(fullName.toUpperCase());

console.log(fullName.replace(/\b\w/g, (char) => char.toUpperCase()));