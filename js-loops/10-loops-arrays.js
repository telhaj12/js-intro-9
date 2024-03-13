const numbers = [3, 4, 7, 3, 2, 2, 7];

// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19

console.log('\n-----------Sum of the elements that have Even Indexes-------------\n');

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    if(i % 2 === 0) sum += numbers[i];
}
console.log('The sum of the even numbers = ' + sum);


console.log('\n-----------Product of the elements that have Odd Indexes-------------\n');


let product = 1;

for(let i = 0; i < numbers.length; i++) {
    if(i % 2 !== 0) product *= numbers[i];
}
console.log('The product of the odd indexes = ' + product);


console.log('\n-----Product of the two arrays INTERVIEW QUESTION HOMEWORK QUESTION-------------\n');
/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from 
the first 2 arrays and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];

console.log(arr1);
console.log(arr2);

const arr3 = []

// for loop

for(let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i] * arr2[i]);
}
console.log(arr3);

console.log('\n-----Product of the two arrays w different lengths INTERVIEW QUESTION HOMEWORK QUESTION-------------\n');
// find product of the two arrays 
const array1 = [ 5, 8 ];

const array2 = [ 9, 3, 5, 1, 0 ];
// [ 45, 24, 5, 1, 0 ]

const array3 = [];

const shortArray = array1.length < array2.length ? array1 : array2;

const longArray = array1.length > array2.length ? array1 : array2;

for(let i = 0; i < shortArray.length; i++) {
    array3.push(array1[i] * array2[i]);
}
console.log(array3.concat(longArray.slice(shortArray.length)));

console.log('\n----------------Descending elements in 3 arrays -------------\n');

const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];
// Put together all these elements from a1, a2 and a3 in an descending order -> [10, 9, 7, 5, 4, 3, 3, 3, 1, 0]

/*
1. create a new array and store all the elements in it
2. sort the new array in the descending order
*/

// const allNumbers = a1.concat(a2, a3);
 const allNumbers = [...a1, ... a2, ...a3];

allNumbers.sort((a, b) => b - a);

console.log(allNumbers);

console.log('\n----------------Find the first even number in the array  -------------\n');

const nums = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0

let firstEven;

for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
        firstEven = nums[i];
        break;
    }
}

console.log('The first even number = ' + firstEven);



let firstE;

for(const number of nums) {
    if(number % 2 === 0) {
        firstE = number;
        break;
    }
}
console.log(firstE);

// Please find the biggest odd number from the array -> 3
// -1, 1, 3, 0, 2, 6, 8
console.log('\n----------------Find the biggest odd number in the array  -------------\n');

let biggestOdd; 

for(const number of nums) {
    if(number % 2 !== 0 && (biggestOdd === undefined || number > biggestOdd)) {
        biggestOdd = number; 
    }
}
console.log(biggestOdd);



