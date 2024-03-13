const {generateRandomNumber} = require('../utils/MathHelper.js');

/*
// TASK 1

for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) {console.log(i);
    }
}
*/
/*
// TASK 2

for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) {console.log(i);
    }
}
*/

/*
// TASK 3
 for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0) {console.log(i);
    }
}
*/

/*
// TASK 4
for(let i = 0; i <= 7; i++) {
    let square = i * i
    console.log(`The square of ${i} is = ${square}`);
}
*/


/*
// TASK 5
let sum = 0;
for(i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
*/

/*
// TASK 6
let ranNum = generateRandomNumber(1, 10);
 let factorialNum = 1;
 for(let i = 1; i <= ranNum; i++) {
    factorialNum *= i;
 }
console.log(`The random number = ${ranNum}`)
 console.log(`The facorial of ${ranNum} = ${factorialNum}`);
*/


/*
// TASK 7

let r1;
let att = 0;

while(true) {
    r1 = generateRandomNumber(1, 100);
    att++;

    if(r1 % 5 === 0) break;
}
console.log(`The random number is ${r1} and it took ${att} attempt/s to generate it.`);
*/

/*
// TASK 8

const arr1 = ['Germany', 'Argentina', 'Ukraine', 'Romania' ];
console.log(arr1);
console.log(arr1.sort());
*/


/*
// TASK 9
 const cartoonDogs = [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];

console.log(cartoonDogs);
console.log(cartoonDogs.includes('Pluto'));
*/

/*
// TASK 10

const cartoonCats = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael' ];
console.log(cartoonCats.sort());
console.log(cartoonCats.includes('Garfield') && cartoonCats.includes('Felix'));
*/


/*
// TASK 11

const num = [ 10.5, 20.75, 70, 80, 15.75 ];
console.log(num);
for(let i = 0; i < num.length; i++) {
    console.log(num.at(i));
}

*/

/*
// TASK 12
const objects = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
console.log(objects);

let starts = 0;

for(const object of objects) {
    if(object.toLowerCase().startsWith('b') || object.toLowerCase().startsWith('p')) starts++;
}
console.log(`Elements starting with 'B' or 'P' = ${starts}`);

let bookPen = 0;

for(const obj of objects) {
    if(obj.toLowerCase().includes('book') || obj.toLowerCase().includes('pen')) bookPen++;
}
console.log(`Elements having 'book' or 'pen' = ${bookPen}`);
*/

/*
// TASK 13

const numbers = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];
console.log(numbers);

let countGreaterThan10 = 0;
for(const num of numbers) {
    if(num > 10) {
        countGreaterThan10++;
    }
}
console.log(`Elements that are more than 10 = ${countGreaterThan10}`);

let countLessThan10 = 0;
for(const n of numbers) {
    if(n < 10) {
        countLessThan10++;
    }
}
console.log(`Elements that are less than 10 = ${countLessThan10}`);

let countEquals10 = 0;
for(const n1 of numbers) {
    if(n1 === 10) {
        countEquals10++;
    }
}
console.log(`Elements that are 10 = ${countEquals10}`);
*/
/*
// TASK 14 

const arr1 =  [5, 8, 13, 1, 2];
const arr2 =  [9, 3, 67, 1, 0];
console.log(`1st array is = [${arr1}]`);
console.log(`2nd array is = [${arr2}]`);

const arr3 = [];
for(let i = 0; i < arr1.length; i++) {
    arr3.push(Math.max(arr1[i], arr2[i]));
}
console.log(`3rd array is = [${arr3}]`);

*/

/*
// TASK 15

function firstDuplicate(arr1){
    for(let i = 0; i < arr1.length; i++)
       if(arr1.indexOf(arr1[i]) !== arr1.lastIndexOf(arr1[i])) return arr1[i];
       return -1;

}     

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3 ]));
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar']))

*/

/*
// TASK 16
 function getDuplicates(arr) {
    let dups = []
    for(let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !dups.includes(arr[i])) 
    dups.push(arr[i]);} 
    return dups
 }
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
*/

/*
// TASK 17

function reverseStringWords(str){
    const strArray = str.split(' ');
    let reversedStr = "";
    for (let i = 0; i < strArray.length; i++){
        if (i > 0 && i < strArray.length) reversedStr = reversedStr.concat(" ");
        for (let j = strArray[i].length - 1; j >= 0; j--){
        reversedStr =  (reversedStr.concat(strArray[i][j]));
        } 
    }
    return reversedStr;   
}

console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript")); 
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords("    "));

*/

/*
// TASK 18 

function getEvens(num1, num2) {
    const arrayEven = [];
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    for(let i = min; i <= max; i++) {
        if(i % 2 === 0) arrayEven.push(i);
    } 
    return arrayEven;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));
*/


/*
// TASK 19  
function getMultipleOf5(num1, num2) {
    const arr5 = [];
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    for(let i = min; i <= max; i++) {
        if(i % 5 === 0) arr5.push(i);
    }
    return arr5;
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
*/


/*
// TASK 20 
function fizzBuzz(num1, num2) {
    const arrFizzBuzz = []
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    for(let i = min; i <= max; i++) {
        if(i % 3 === 0) arrFizzBuzz.push('Fizz');
        else if(i % 5 === 0) arrFizzBuzz.push('Buzz');
        else if(i % 5 === 0 && i % 3 === 0) arrFizzBuzz.push('FizzBuzz');
        else arrFizzBuzz.push(i);
    }
    let str = arrFizzBuzz.join(' | ');
    return str;
}
console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));

*/