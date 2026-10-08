// script.js
console.log("My script is connected!");
let score = 0;
score = 10; // fine — let can be reassigned
const studentName = "Pema";
// studentName = "Dorji"; // error — const cannot be reassigned

let name = "Pema";
console.log(typeof name); // "string"
let age = 30;
console.log(typeof age); // "number"
let isEnrolled = true;
console.log(typeof isEnrolled); // "boolean"
let subjects = ["HTML", "CSS"];
console.log(typeof subjects); // "object"

const name = "Pema";
const age = 19;
// old way
console.log("Hi " + name + ", you are " + age + ".");
// template literal
console.log(`Hi ${name}, you are ${age}.`);

