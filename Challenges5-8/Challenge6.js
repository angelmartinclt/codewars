// Given an array of integers as strings and numbers. return the sum of array values as if all were numbers. Return your answer as a number 

function sumMix(x){
    let sum = 0;

    for(let i = 0; i < x.length; i++){
        sum += Number(x[i]);
    } return sum;
}
console.log(sumMix([9, 3, "7", "3"]));

// this was found in "intermediate" level. On codewars I was making the sum variable outside of the function which is why it took me so long, I also did not call the index which is where I messed up