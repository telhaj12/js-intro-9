const {generateRandomNumber} = require('../utils/MathHelper.js');


console.log('\n------------------------------------------\n')
let randomNumber = generateRandomNumber(1, 10);

if(randomNumber === 7) {
    console.log('I got my fav number')
}
else {
    console.log(`Unfortunately, I got ${randomNumber}`)
}


console.log('\n------------------------------------------\n')


/*
Generate a random number between 1 and 10
Print EVEN if the number is EVEN
Print ODD if the number is ODD

5   -> 'ODD'
8   -> 'EVEN'
*/
/*
let r1 = generateRandomNumber(1, 10);
    console.log('Randomly generated number is = ' + r1)


    if(r1 % 2 === 0) {
        console.log('EVEN');
    }
    else {
        console.log('ODD');
    }
    */

    let r2 = generateRandomNumber(0, 1);

    if(r2 === 1) {
        console.log('The number is ONE');
    }
    else {
        console.log('The number is ZERO');
    } 


console.log('\n-------------------------------------\n')

let r3 = generateRandomNumber(-10, 10)

if(r3 > 0) {
    console.log('The number is POSITIVE');
}
else if(r3 < 0) {
    console.log('The number is NEGATIVE');
}
else { // Hidden condition !(r3 > 0) && !(r3 < 0)
    console.log('The number is ZERO');
}


if(r3 > 0) {
    console.log('The number is POSITIVE');
}
else {
    if(r3 < 0) {
        console.log('The number is NEGATIVE');
    } else {
        console.log('The number is ZERO');
    }
}