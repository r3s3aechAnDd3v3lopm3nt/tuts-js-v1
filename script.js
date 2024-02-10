// console.log('test');

// A BLOCK OF CODE => PERFORM A TASK

// A FUNCTION DECALARATION (Defining a function)
// function square(number) {
//     return number * number;
// }

// A FUNCTION CALL (invoking / executing a function)
// const result = square(5);

// console.log(result);

// console.log(); //Build-in Function

// // A Function Declaration
// function name(params) {
//     //statement
//     // have access to "this" keyword
// }

// // A Fucntion Expression
// const name = function(params) {
//     // statement
// }

// // An Arrow Function Expression
// const name = (params) => {

// }

function sayHi(name) {
    console.log(`Hi, ${name}`);
}

sayHi('Joe');
sayHi('Jane');

// Return Undefined
function add(a, b) {
    return a + b;
}

const sum = add(2, 2);

console.log(sum);

function test() {
    return true;
    return false;
}

const bool = test();

console.log(bool);

// Arrow function

// const square = (number) => {
//     return number * number;
// }

const square = (number) => number * number;

const result = square(10);

console.log(result);