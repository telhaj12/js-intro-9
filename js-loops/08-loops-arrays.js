const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

// Count how many positive numbers you have in the array -> 4

console.log('\n--------------Count Positives--------------------\n');

let countP = 0;
for(const num of numbers) {
    if(num > 0) {
        countP++;
    }
}
console.log('Positives = ' + countP);



countP = 0;

for(let i = 0; i <= numbers.length; i++) {
    if(numbers[i] > 0) countP++;
}
console.log('Positives = ' + countP);


console.log('\n--------------Count Negatives or 0--------------------\n');
let countN = 0
for(const num of numbers) {
    if(num <= 0) {
        countN++;
    }
}
console.log('Negative or 0 = ' + countN);


countN = 0;
for(let i = 0; i <= numbers.length; i++) {
    if(numbers[i] <= 0) countN++;
}
console.log('Negative or 0 = ' + countN);

console.log('\n--------------Count Evens--------------------\n');
let countE = 0
for(const num of numbers) {
    if(num % 2 === 0) countE++;
}
console.log('The even numbers are = ' + countE)


console.log('\n--------------Count Positive Evens--------------------\n');
let countPE = 0
for(const n of numbers) {
    if(n % 2 === 0 && n >= 0) countPE++;
}
console.log('The positive even numbers are = ' + countPE);


for(let i = 0; i <= numbers.length; i++) {
    if(numbers[i] % 2 === 0 && numbers[i] >= 0) countN++;
}
console.log('The positive even numbers are = ' + countPE);