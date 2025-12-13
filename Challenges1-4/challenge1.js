// write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

    //assume you are only given words and that you do get an array. Do not assume the size of the array

    //should return empty string for empty array
    //one word examples should return the word
    // multiple words should be seperated by spaces

let words = ["Angel", "is", "a", "motivated", "person"];

function smash (words){
    return words.join(" ");
};
console.log(smash(words));