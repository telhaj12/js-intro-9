// VOID METHODS- THEY DO NOT RETURN ANYTHING

/* 
Create a function named as sayHi which outputs "Hi" to the console when invoked
If the function does not RETURN something, then you cannot store the result of the function 
 in a variable
*/

function sayHi() {
    console.log('Hi');
}


sayHi(); // Output; 'Hi'


/* 
write a function named as sayHello which takes a name (string) and 
outputs 'Hello {name}!'
sayHello ('John'); // Output: 'Hello John!'
*/

function sayHello (name) {
    console.log(`Hello ${name}!`)
}

sayHello('John');
sayHello('Tareq');
sayHello('Nikki');

/*  
write a function named as greet which takes two arguments as name and greeting and 
outputs '${greeting}, {name}!'
greet('Good morning', 'John'); // Output: 'Good morning, John!'
greet('Hello', 'Ali'); // Output: 'Hello, Ali!'

*/

function greet(name, greeting) {
    console.log(`${greeting}, ${name}!`);
}
greet('Ali', 'Good morning'); // Good morning, Ali!
greet('James', 'Hello'); // Hello James!

// RETURN METHODS
/*
Write a function named as sum which takes 2 number arguments and return their sum
sum(3, 5) -> 8
sum(4, 7) -> 11
sum(-2, 3) -> 1
*/


function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(3, 5) * 2);
console.log(sum(4, 7) * 2);
console.log(sum(-2, 3) * 2);


console.log(sum(2, 3) * sum(5, 7) / sum(2, 4)); // 10


/*
Write a function named as product which takes 3 number arguments and return their product

product(2, 4, 5) -> 40
product(3, 7, 6) -> 126
product(5, 0, 9) -> 0
*/
 
function product(num1, num2, num3) {
    return num1 * num2 * num3;
 }

 console.log(product(2, 4, 5)); // 40
 console.log(product(3, 7, 6)); // 126
 console.log(product(5, 0, 9)); // 0


// These are loops. will learn later
 function nTimesStr(str, num) {
    for(let i = 1; i <= num; i++){
        console.log(str);
    }
 }
 nTimesStr('You got this!!!', 5)