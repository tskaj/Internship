// Function to display array elements using for loop and forEach method
function displayarr() {
    let arr1 = ["Abdullah", "intern", true, 20];

    // Displaying array elements using a for loop
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }

    // Displaying array elements using forEach method
    let arr2 = [1, 2, 3, 4];
    arr2.forEach(function (element) {
        console.log(element);
    });
}

// Function demonstrating if statement
function Options() {
    var a = 5;
    var b = 2;
    if (a > b)
        console.log("Number 1 is greater than number 2");
    else
        console.log("Number 2 is greater than number 1");
}

module.exports = {
    displayarr,
    Options
};