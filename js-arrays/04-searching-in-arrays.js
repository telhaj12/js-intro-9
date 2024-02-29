const numbers = [ 5, 10, 5, 10, 25, 100, 77 ];

numbers.includes(5) 
console.log(numbers.includes(5)); // true


numbers.indexOf(5); // 0 
numbers.lastIndexOf(5); // 2

numbers.indexOf(500); // -1
numbers.lastIndexOf(500); // -1


// check if the above array has both 5 and 7
// print true if it has both or false otherwise 

numbers.includes(5) && numbers.includes(7)
console.log(numbers.includes(5) && numbers.includes(7));
console.log(numbers.indexOf(5) >= 0 && numbers.indexOf(7) >= 0);



// search for 10 after the index of 4
console.log(numbers.includes(10, 3)); // false
