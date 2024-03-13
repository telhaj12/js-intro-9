/*
Write a function named greeting
*/


// 1. function declaration
function greeting1() {
    console.log('Hello1');
}

greeting1();

// 2. function expression
const greeting2 = function () {
    console.log('Hello2');
}

greeting2();


// 3. arrow functions - ES6 feature
const greeting3 = () => {
    console.log('Hello3');
}
greeting3();


// function declaration
function product1(x, y) {
    return x * y;
}
console.log(product1(4, 3));

// function expression
const product2 = function (a, b) {
    return a * b;
}
console.log(product2(5, 3));


// arrow function 
const product3 = (num1, num2) => {
    return num1 * num2;
}
console.log(product3(2, 6));


// Enhanced arrow function... can only use if it is just one line
const product4 = (num1, num2) => num1 * num2;
console.log(product4(5, 2)); // 10


const upperCaseName = (string) => string.toUpperCase();

console.log(upperCaseName('john'));