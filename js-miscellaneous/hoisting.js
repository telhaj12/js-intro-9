
// BEFOREE ES6
console.log(address);

var address = 'Chicago, IL';

/* JS assumes the above code is written as beloew

var address;

console.log(address); // undefined

address = 'Chicago, IL';
*/

console.log(sum(1, 2));

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(3, 2));

// Function expression or arrow functions

const add = function (n1, n2) {
    return n1 + n2;
}