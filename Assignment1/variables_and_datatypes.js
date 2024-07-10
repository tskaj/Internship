var Globalvar = "I am string that is declared globally";

// Function to demonstrate true/false assignment
function truefalse() {
    var bit;
    bit = true;
    console.log(bit);
}

// Function to perform addition
function sum(a, b) {
    return a + b;
}

// Function to perform multiplication
function mul(a, b) {
    return a * b;
}

// Function to display a string and access a global variable
function Displaystring(a) {
    console.log(a); /* Displaying the received string in the console */
    console.log(Globalvar); /* This variable is declared globally so it can be accessed by the function */
}

module.exports = {
    truefalse,
    sum,
    mul,
    Displaystring
};