// test.js

// Importing functions from other files within the same directory
const {
    truefalse,
    sum,
    mul,
    Displaystring
} = require('./variables_and_datatypes');  // Adjusted path

const {
    displayarr,
    Options
} = require('./if_statements_and_loops');  // Adjusted path

// Sample usage of functions - do not modify
console.log("This is addition of 1 & 3 numbers= " + sum(1, 3));
console.log("This is multiplication of 2 & 5= " + mul(2, 5));
Displaystring("Abdullah Javed");
truefalse();
displayarr();
Options();
