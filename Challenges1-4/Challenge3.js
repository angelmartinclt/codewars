// Sum all numbers of a given array except the highest and lowest element (by value, not index). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value 

    // If an empty value (null, none, nothing, nil, etc) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0 

let array = [6, 2, 1, 8, 10];

function sumArray(array){
    if (!Array.isArray(array)|| array.length <3) {
        return 0;
    }
    let sum = 0;
    let min = array [0];
    let max = array [0];

    for(let i = 0; i < array.length; i++){
        let current = array[i];
        sum += current;

        if (current < min){
            min = current;
        } if (current > max){
            max = current;
        }
    }
    return sum - min - max 
}
console.log(sumArray(array));

//This problem was found in "beginner", it did take me longer than the novice challenges due to needing a more complex solution but eventually solved it after making 2 if statements