// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n <0 OR m < 0 return 0.

function paperwork(n, m){
    if (n < 0 || m < 0){
        return 0;
    } return n * m;
}
console.log(paperwork(9, 4));
console.log(paperwork(5, 5));
console.log(paperwork(-5, 0));

//This challenge was found in "intermediate" level, this was easier due to just going in the order of the instructions (psuedocoding)