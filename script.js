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



