// test.js

// Importing functions from other files within the same directory
const {
    truefalse,
    sum,
    mul,
    Displaystring
} = require('./variables_and_datatypes');

const {
    displayarr,
    Options
} = require('./if_statements_and_loops');

const {
    firstname,
    midname,
    lastname,
    substring,
    capitalize
} = require('./strings');

console.log("This is addition of 1 & 3 numbers= " + sum(1, 3));
console.log("This is multiplication of 2 & 5= " + mul(2, 5));
Displaystring("Abdullah Javed");
truefalse();
displayarr();
Options();
substring(firstname, midname, lastname);
capitalize("eMuMba"); // "Emumba"
capitalize("prIVate"); // "Privcate"
capitalize("iMMiTTed"); // "Limmitted"
