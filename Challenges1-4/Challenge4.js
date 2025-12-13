// Given a random non negative number, you have to return the digits of this number within an array in reverse order 

function digitize(n){
    let result = [];
    let digits = n.toString();

    for(let i = digits.length - 1; i >= 0; i--){
        result.push (Number(digits[i]));
    }
    return result;
}
console.log(digitize(35231));
console.log(digitize(0));
console.log(digitize(1738));