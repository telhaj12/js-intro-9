const {generateRandomNumber} = require('../utils/MathHelper.js');
/* TASK 1
let num1 = generateRandomNumber(1, 100);
let num2 = generateRandomNumber(1, 100);
let num3 = generateRandomNumber(1, 100);


if((num1 + num2 + num3) / 3 >= 50) {
    console.log('true')
} 
else console.log('false');
*/

/* Task 2
let num1 = generateRandomNumber(1, 3);
let num2 = generateRandomNumber(1, 3);
let num3 = generateRandomNumber(1, 3);

if(num1 === num2 && num1 === num3){
    console.log('TRIPLE MATCH')
} else if(num1 === num2 || num2 === num3 || num1 === num3)
console.log('DOUBLE MATCH')
else {
    console.log('NO MATCH');
}

*/

/*
TASK 3
function hasA(str) {
    return str.includes('a') || str.includes('A');
};
console.log(hasA('ABC'));
*/

/*
TASK 4
function doubleOrTripleWord(str) {
    if(str.length % 2 === 0) 
    return str.repeat(3)

}
function doubleOrTripleWord(str) {
    if(str.length % 2 != 0)
return str.repeat(2)
}
console.log(doubleOrTripleWord('tec'));
*/

/*
//TASK 5
function firstWord(str) {
    if(str.indexOf(' ') > 0)
return str.slice(0, str.indexOf(' '));
return str
}
console.log(firstWord('Hello World'));
*/



/*
TASK 6
function lastWord(str) {
    return str.slice(str.lastIndexOf(' ') + 1);
}
console.log(lastWord('I love TechGlobal'));
*/

/*
//TASK 7
function firstLastWord(str) {
    if(str.indexOf(' ') > 0)
    return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' ') + 1);
return str + str
}
console.log(firstLastWord('Hello'));
*/

/*
TASK 8
function startVowel(str) {
    let firstChar = str.charAt(0).toLowerCase();
return firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' 
|| firstChar === 'u';
}
console.log(startVowel('ice cream'));
*/



/*
//TASK 9
function swap4(str) {
if(str.length >= 8)
    return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);
return '';
}
console.log(swap4('TechGlobal'));

*/

/*
function swapFirstLastWord(str) {
    let firstWord = str.slice(0, str.indexOf(' '));
    let lastWord = str.slice(str.lastIndexOf(' ' + 1));
    let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
    return lastWord + middle + firstWord
}
console.log(swapFirstLastWord('The duck swam on the lake'));
*/
