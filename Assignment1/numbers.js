function tostr(number){
    return number.toString()+ number.toString();
}

function tobin(value){
    return (Number.parseInt(value, 10))//Will conver the string in to Binary number(0-1)
}

function remainder(number){
    return (number%2); //remainder of 2
}
module.exports = {
    tostr,
    tobin,
    remainder
};