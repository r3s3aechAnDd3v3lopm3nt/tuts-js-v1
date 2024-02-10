// 02_comment
// Creating a variable using var keyword
// var VariableName = 'Test';

// Creating a variable using let keyword
// let VariableName = 'Test';

// Creating a variable using const keyword
// const VariableName = 'Test';

//Variable Naming
//1. The name should be unique
//2. The name should not be unique be anyword reversed keyword
//3. The name must start with a character, _, &.

// console.log(VariableName);

// 03_operators
// Comparison Operators => true/false
// Nomally When we hsing comparison operator is will present true/false
// Example 1
const a = 5;
const b = 10;

// Greater than
console.log(a > b); //false
// Greater than or equal to
console.log(a >= b); //false
console.log('-------------------');
// Less than
console.log(a < b); // true
// Less than or equal to
console.log(a <= b); // true
console.log('-------------------');

// Is equal
console.log(a == b);
// Not equal
console.log(a != b);
console.log('-------------------');

// Strict Equality
console.log(a === b);
// Strict Inequality
console.log(a !== b);
console.log('-------------------');

console.log(5 == 5); //true
console.log(5 === 5); //true
console.log(5 == "5"); //true not make sense
console.log(5 === "5"); //false make sense 
console.log("Hello" === "Hello"); //true
console.log('-------------------');

// more about Strict Equality
// Compares VALUES and DATA TYPES
// return true only if both are the same

// Loose Equality
// Doesn't compare DATA TYPES
console.log(20 == "20"); //true
console.log('-------------------');

// The Good ONEs: === !==
// The Evil Twins: == !=
console.log('' == '0'); // false
console.log(0 == ''); //true
console.log(0 == '0');//true
console.log('-------------------');
console.log(true == 1);
console.log("5" == 5);

// logical Operators
// AND && => ALL OPERANDS are TRUE => TRUE
console.log(true && false); //false
console.log(true && true); //true
// OR || => AT LEAST ONE OPERAND IS TRUE => TRUE
console.log(true || false); //true
console.log(false || false); // false
// NOT !
console.log(!true); //false
console.log(!false); //true



// 04_for_loop_statement
// the for loop statement

// for([initialization]; [condition]; [final-expression]) {
    // code block
// }

for(let i = 0; i < 10; i++) {
    console.log(i);
}
// 04_while_statement
// the 'while' loop

// while(condition) {
    //code
// }

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
// =======
// Lesson Logic and Control Flow

const age = 18;

// if (condidtion) {
    // block of code
// }

if (age > 18) {
    console.log('You may enter!');
} else if (age === 18) {
    console.log('You just turned 18, welcome');
} else {
    console.log('Grow up!');
}
