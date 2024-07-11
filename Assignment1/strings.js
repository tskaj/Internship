let firstname = "Emumba";
let midname = "Private";
let lastname = "Limited";
let a = "Emumba Private Limmitted";
let myName = "Abdullah Javed"

function substring(firstname, midname, lastname){
    var b = a.substring(0, 14);
    console.log(b);

    var c = `This
is
a
multiline 
string.`
    console.log(firstname)
    console.log(midname)
    console.log(lastname)
    console.log(c);

    console.log(`My name is ${myName}`); // string interpolation

    console.log(`I am working as an intern at ${firstname} ${midname} ${lastname}`);
}

function capitalize(word) {
    console.log(word[0].toLocaleUpperCase()+ word.substring(1).toLocaleLowerCase());
}

module.exports = {
    firstname,
    midname,
    lastname,
    substring,
    capitalize
};
