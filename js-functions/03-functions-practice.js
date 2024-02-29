/*
Write a function which takes a number and reeturn true if the number is even
or return false if the number is odd

isEven(4) ->true 
isEven(3) -> false
isEven(0) -> true 
isEven(-2) -> true 
isEven(-7) -> false

EVEN: number is divisible by 2  -> number % 2 === 0
odd: number not divisible by 2 -> number % 2 !== 0

15 / 2 => 7.5
Number.isInteger()
*/

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(0));
console.log(isEven(-2));
console.log(isEven(10));
console.log(isEven(-4));
console.log(isEven(-1));
console.log(isEven(3));


/*
Write a function which takes a number and reeturn true if the number is even
or return false if the number is odd

isOdd(4) ->  false
isOdd(3) ->  true
isOdd(0) ->  false
isOdd(-2) -> false
isOdd(-7) ->  true

EVEN: number is divisible by 2  -> number % 2 === 0
odd: number not divisible by 2 -> number % 2 !== 0
*/


function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(3));
console.log(isOdd(-3));
console.log(isOdd(0));
console.log(isOdd(2));



/*
Write a function names initials which takes 2 arguments as fname and lname
returns initials

Initials('John', 'Doe')  -> 'J.D.'
initials('Adam', 'Smith')  -> 'A.S.'
*/


function initials(fname, lname) {
   return `${fname[0]}.${lname[0]}.`;
}

console.log(initials('John', 'Doe')); // 'J.D.'

function inits(fullname) {
    return fullname[0] + fullname[fullname.indexOf(' ') + 1]
}

console.log(inits('John Doe'));
console.log(inits(Adam Smith));


// solution in lecture 02/06/24 minute 20






