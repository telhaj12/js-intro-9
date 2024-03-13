const names = ['John', 'Jane', 'Alex', 'Max'];

// Print each name in the array

const printName = function(x) {
    console.log(x);
}

names.forEach(printName);

// Or a simpler way to do it is below

names.forEach(x => console.log(x));



for(const name of names) {
    console.log(name[0]);
}
for(let i = 0; i < names.length; i++) {
    console.log(names[i][0]);
}

names.forEach( (name) => {
    console.log(name[0])
})

// Output names that start with J -> John and Jane
names.forEach((name) => console.log(name.toUpperCase()));

names.forEach( (name) => {
    if(name.startsWith('J')) console.log(name);
    
});

// count how many names has 4 letters -> 3
// This task is better to solve with reduce method and we will learn it later
let count4 = 0;
names.forEach(name => {
    if(name.length === 4) count4++;
});
console.log(count4);

const numbers = [5, 10, 3, 0, -2];

// Print each number


const anyName = function (x) {
    console.log(x);
}
numbers.forEach(function (x) {
    console.log(x);
})

numbers.forEach(x => console.log(x));

// Print true for even numbers and false for odd numbers 

numbers.forEach(num => {
   console.log(num % 2 === 0);
});

// create a new array which stores all these numbers mulitplied by the element of 3 [ 15, 30, 9, 0, -6 ]

const newArray = [];
numbers.forEach(num => {
    newArray.push(num * 3)
});
console.log(newArray);

numbers.forEach(num => newArray.push(num * 3));
console.log(newArray);

// solving with map
numbers.map(number => number * 3);
console.log(numbers.map(number => number * 3));


// create a new array that stores only even numbers -> [ 10, 0, -2 ]

const evens = [];
numbers.forEach(num => {
    if((num % 2 === 0)) evens.push(num);
});
console.log(evens);

// we can solve this with filter() method

numbers.filter(number => number % 2 === 0);
console.log(numbers.filter(number => number % 2 === 0));
