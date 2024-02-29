// 1. string
let favCoffee = 'Mocha'; // "Mocha" or 'Mocha' 



/*
1+1  -> 2
'1' + '1' -> '11'
*/


let itemName = 'Mouse';


//2. number -> floating number or decimal number.  
let favCoffeePrice = 4.00
let itemPrice = 16.99;

let age = 25;
let itemQuantity = 5;

console.log(itemPrice); 

// 3. Boolean true or false or any expression that results in true or false
let b1 = true;
let b2 = false;
let isThereMocha = true;

let isItRainingToday = false;

3 == 3 --> true 
'Abc' = 'ABC' false
2 * 2 ==4 && 'abc' != 'abc' -> false
2 * 2 ==4 || 'abc' != 'abc' -> true

// 4. undefined- a variable declared but not assigned any value
let favBook;
console.log(favBook); // undefined



// 5. null
let middleName = null;
console.log(middleName); // null
console.log(typeof middleName); // object


// 6. bigint       // this is added with ES6
let num1 = 947945790348952384798n;
let num2 = BigInt(947945790348952384798n);

console.log(num1);
console.log(num2);


// 7. symbol
let star = Symbol('*');
console.log(star);
console.log(typeof star); // symbol



// typeof operator 
console.log(typeof 5); // number
console.log(typeof 5n); // bigint
console.log(typeof true); // boolean
console.log(typeof !false); // boolean
console.log(typeof (3 == 3 && 5 != 5)); // boolean
console.log(typeof '123'); // string 
console.log(typeof ''); // string (this is an empty string but still a string)
console.log(typeof null); // null 
console.log(typeof undefined); // undefined 