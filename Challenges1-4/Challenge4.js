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

// This challenge was found in "beginner" to test how long it took and it did take me around 7 minutes to solve. I felt confident but did have syntax issues which is why it took so long