// How to create an array

// 1. using array literals (square brackets)
const arr1 = [];

//2. Using array constructor with the new keyword
const arr2 = new Array(); // empty array


// 3. using split() method and getting an array from a string
let name = 'John';
let sentence = 'I like arrays';

const arr3 = name.split('');
const arr4 = sentence.split(' ');

console.log(arr1); // 0
console.log(arr2); // 0
console.log(arr3); //[ 'J', 'o', 'h', 'n']
console.log(arr4); // [ 'I', 'like', 'arrays' ]


// Store names: alex, John, Max
const array1 = ['Alex', 'John', 'Max',];

console.log(array1);
console.log(array1.length);

const array2 = new Array();
array2.push('Alex');
array2.push('Alex', 'Max');

console.log(array2);
console.log(array2.length);


const cities = ['Chicago', 'Rome', 'Berlin', 'Tokyo'];

// How to retrieve array elements 

let tokyo = cities[3]; // 'Tokyo'

console.log(tokyo); // 'Tokyo'

console.log(cities[1]); // 'Rome'

console.log(cities[-2]); // undefined
console.log(cities[5]); // undefined


// updating an existing element in an array
cities[1] = 'Milan';
cities[0] = 'Miami';

console.log(cities); // [ 'Miami', 'Milan', 'Berlin', 'Tokyo',];



console.log(cities.at(-1)); // 'Tokyo'
console.log(cities.at(-5)); // undefined


const var1 = [];
const var2 = 25;
const var3 = 'John';

Array.isArray(var1);
Array.isArray(var2);
Array.isArray(var3);

console.log(Array.isArray(var1));
console.log(Array.isArray(var2));
console.log(Array.isArray(var3));


console.log(typeof var1); // object 
console.log(typeof var2); // number 
console.log(typeof var3); // string



/* INTERVIEW QUESTION 
How do you make sure if a variable is an array?
typeof operator cannot be used as it returns object for the array
However, isArray() static method returns true if the given variable is an array
*/


let smth1 = [];
let smth2 = {};

console.log(typeof smth1); // 'object'
console.log(typeof smth2); // 'object'


console.log(Array.isArray(smth1)); // true