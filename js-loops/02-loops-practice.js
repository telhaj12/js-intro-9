const {generateRandomNumber} = require('../utils/MathHelper.js');


// Output the numbers from 100 to 0 (both inclusive) –> 100 99 98 97 96 ….

for(let i = 100; i >= 0; i--) {
    console.log(i);
}


// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 ….
/*
start: 0
end: 50
update: +2
*/

for (let i = 0; i <= 50; i += 2) {
    console.log(i);
}

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


for(let i = 1; i <= 25; i++) {
    console.log(i * 2);
}

// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 …. 50

for(let i = 0; i <= 50; i += 5) {
    console.log(i);
}


for(let i = 0; i <= 50; i++) {
    if(i % 5 === 0) console.log(i);
}

for(let i = 1; i <= 10; i++) {
    console.log(i * 5);
}


// find the sum of the numbers from 1 to 5 (both inclusive) -> 15

let sum = 0

for(let i = 1; i <= 5; i++) {
    sum +=i; 
}
console.log(sum);


// Find the sum of the numbers from 10 to 15 (both inclusive) -> 75
let num = 0

for(let i = 10; i <= 15; i++) {
    num += i;
}
console.log(num);

let school = 'TechGlobal School'; 
for(let i = 0; i <= school.length - 1; i++) { // or i < shcool.length
    console.log(school[i]);
}

// Count the total occurrences of letter o in TechGlobal School --> 3

let count0 = 0;
for(let i = 0; i <= school.length - 1; i++) { 
    if(school[i].toLowerCase() === 'o') count0++;
} // Add .toLowerCase if it is asking for 'o' and there is a 'O' in the name
console.log(count0); // 3


console.log(school.split('').filter((element) => element.toLowerCase() === 'o').length);


// Output all the odd numbers from 1 to Random Number (both inclusive) -> 1 3 5 7 9 ... random

let randomNumber = generateRandomNumber(10, 20);

console.log('The random number is =', randomNumber);

for(let i = 1; i <= randomNumber; i += 2) {
    console.log(i);
}



/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

r1 r2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

let r1 = generateRandomNumber(1, 10);
let r2 = generateRandomNumber(1, 10);