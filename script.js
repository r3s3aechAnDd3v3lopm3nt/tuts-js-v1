// String with console.log(); [V8 engine on chrome Browser]
// console.log('Hello, World!');
// ----------------------------
// String with const variable 
// const exampleString = 'Hello, World!';
// console.log(exampleString);
// ----------------------------
// String with singleQuote
// const singleQuotes = 'Hello!';
// console.log(singleQuotes);
// ----------------------------
// String with DoubleQuote
// const doubleQuotes = "Hello!!";
// console.log(doubleQuotes);
// ----------------------------
// String with backticks
// const backticks = `Hello!!!`;
// console.log(backticks);
// ----------------------------
// String with backticks by passing value from variable by
// - using ${} [interpreter]
// const name = 'John';
// const backticks = `Hello, ${name}`;
// console.log(name);
// const singleQuotes = `Hello`;
// console.log(backticks);
// -----------------------------
// Convert value with interpreter calculated by calculator
const backticks = `${2 + 2}`;
console.log(backticks);
// -----------------------------
const wtbackticks = `2 + 2`;
console.log(wtbackticks);
// -----------------------------
// string with static value [recommended using -> singleQuote / DoubleQuote]
const singleQuote = 'Hello, World!';
console.log(singleQuote); // typeof = String
// Checking value by using function [typeof]
console.log(typeof singleQuote); //typeof = String
// Checking value from backtick interpreter
console.log(typeof backticks);

// ------------------------- Number -----------------------------
const wholeNumber = 5;
const decimalNumber = 0.5;
console.log(wholeNumber);
console.log(decimalNumber);
// ------------------------- Operator -----------------------------
const firstNumber = 5;
const secondNumber = 10;

const result = firstNumber + secondNumber;
console.log(result);
// ------------------------- Boolean -----------------------------
// true = yes, correct, 1
// false = no, incorrect, 0
// ------------------------- Boolean -----------------------------
const isCool = true;
// console.log(isCool);
// console.log(typeof isCool);
if(isCool) {
    console.log("Hello, World! You're Welcome");
} else {
    console.log("Oh!, hi");
}
// ------------------------- Null -----------------------------
let age = null;
age = 20;
console.log(age);
// console.log(typeof age); == object
// ------------------------- Undefined -----------------------------
let x; //let x = undifined [=] let x;
console.log(x);
// ------------------------- objects -----------------------------
// const name = 'John';
// const age = 25;
const person = {
    // key: Value
    name: 'John',
    age: 25,
}
// Result Object
// console.log(person);
// Dot Notation Spacific Value inside the object
// console.log(person.name); typeof = object
console.log(person.name); //typeof = string

// Array
const arr = [1,2,3,4];
console.log(arr);

// Object
const date = new Date();
console.log(date);

// Statically Typed
// Maintain on C, C++, Java for example

// Dynamically Typed
// Javascript Dynamically in The DataType.
let message = 'Hello, Wrold!';

console.log(message); //Result of message
console.log(typeof message); // Result of Datatpye message

message = 5;

console.log(message); //Result of message after change the value
console.log(typeof message); //Result of Datatype message after change the value