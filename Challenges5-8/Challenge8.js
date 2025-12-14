// All of the animals are having a feast, each animal is bringing one dish. One rule: the dish must start and end with the same letters as the animals name

// Write a function named feast that takes the animals names and dish as arguments and returns true or false to indicate whether the animal is allowed to bring the dish or not 

    // Assume that beast and dish are allways lowercase strings and that each has at least two letters. beat and dish may contain hypens and spaces, but these will not appear at the beginning or end of the string, they will not contain numerals


function feast(beast , dish){
    let firstBeast = beast[0];
    let lastBeast = beast[beast.length -1];

    let firstDish = dish[0];
    let lastDish = dish[dish.length -1];

    return firstBeast === firstDish && lastBeast === lastDish;
}

console.log(feast("brown bear", "bear claw"));

console.log(feast("chickadee", "chocolate cake"));

// This was found in "advanced". It was difficult because I was not returning firstBeast, firstDish, lastBeast and lastDish all on the same line, I was returning them seperately which would not work because they need to all be compared. 