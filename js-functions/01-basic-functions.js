function startTheClass() {
    console.log('Hey Students! Please send "here" in the chat!');
    console.log('RECAP!');
    console.log('Start with new topic!');
}


startTheClass(); // invoke the function   - execute or run the function 
startTheClass();




function generateRandomNumber(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min ;
    return random;
}

console.log(generateRandomNumber(4, 3)); 


function generateRandomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    let random = Math.floor(Math.random() * (max - min + 1)) + min ;
    return random;
}

console.log(generateRandomNumber(1, 3));







