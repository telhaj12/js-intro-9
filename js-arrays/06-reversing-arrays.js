const fruits = [ 'Apple', 'Orange', 'Grapes', 'Bananas' ];

const reversedFruits = fruits.reverse();

console.log(reversedFruits);
console.log(fruits);

// It changes the original array


/* INTERVIEW QUESTION
HOW TO HAVE YOUR ARRAY REVERSED KEEPING THE ORIGINAL ORDER
*/


const numbers = [ 1, 2, 3, 4, 5 ];

const numbersCopy = [...numbers]; // Completely a new array with the same --
// -- elements of the original array

numbersCopy.reverse();

console.log(numbers);
console.log(numbersCopy);