
const {generateRandomNumber} = require('../utils/MathHelper.js');









function startE(fname) {
    if(fname[0] === 'E' || fname[0] === 'e') {
        return true;
    }
    else {
        return false;
    }
}

console.log(startE('Emily')); // true
console.log(startE('emily')); // true
console.log(startE('Alex')); // false
console.log(startE('')); // false


/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

console.log('/n--------------------------------------/n')


function divisible5(num) {
    if(num % 5 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(divisible5(7));
console.log(divisible5(10));
console.log(divisible5(5));
console.log(divisible5(99));



console.log('---------------------------------------------');


// make sure to study this question (foobar)

/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/



function divisible1(num1) {
    if(num1 % 5 === 0 && num1 % 7 === 0) {
        return ('foobar')
    }
    else if(num1 % 7 === 0) {
        return ('bar')
    }
    else if(num1 % 5 === 0)
    return ('foo')
 return num1
}


console.log(divisible1(5));
console.log(divisible1(2));
console.log(divisible1(35));
console.log(divisible1(3));
console.log(divisible1(12));
console.log(divisible1(21));


// Akins way of solving foobar

function fooBar(num) {
    if(num % 5 === 0 && num % 7 === 0) return 'foobar';
    else if(num % 5 === 0) return 'foo';
    else if(num % 7 === 0) return 'bar'; 

    return num;
}

console.log(fooBar(35));
console.log(fooBar(70));
console.log(fooBar(0));
console.log(fooBar(5)); // foo
console.log(fooBar(21)); // bar
console.log(fooBar(8)); // 8
console.log(fooBar(11)); // 11

console.log('-------------------------------------------------');
/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/

let num2 = generateRandomNumber(0, 100)



function getGrade(num2) {
    if(num2 >= 90 && num2 <= 100) return 'A';
    else if(num2 >= 80 && num2 <= 89) return 'B';
    else if(num2 >= 70 && num2 <= 79) return 'C';
    else if(num2 >= 60 && num2 <= 69) return 'D';

    return 'F';
}
console.log('The random number is = ' + num2);
console.log(getGrade(num2));