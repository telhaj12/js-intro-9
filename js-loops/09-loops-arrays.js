const numbers = [3, 4, 7, 3, 2, 2, 7];

// Find the sum of all numbers  -> 28
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
}
console.log('The sum of the numbers = ' + sum);

sum = 0;
for(const n of numbers) {
    sum += n
}
console.log('The sum =' + sum);
console.log('The average is =', sum / numbers.length)

// find the product of all the numbers starting from the index 3 -> 84

let product1 = 1;

for(let i = 3; i < numbers.length; i++) {
   product1 *= numbers[i]
}
console.log(product1);

const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ]; 

let result = 0 // best answer
for(let i = 0; i <= 2; i++) {
   // result += nums[i] + nums[nums.length - (i + 1)];
   result += nums[i] + nums.at(-i-1);
}
console.log(result);
