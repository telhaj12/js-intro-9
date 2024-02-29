const names = [ 'Alex', 'John' ];

console.log(names); // [ 'Alex', 'John' ]
// adding elements to the end of the array---push

names.push('Jane'); // Will be added to the end of the array - tail

console.log(names); // [ 'Alex', 'John', 'Jane' ]

names.push('Max', 'Maria');

console.log(names); // [ 'Alex', 'John', 'Jane', 'Max', 'Maria' ]

// Removing elements from the end of the array

names.pop(); // 'Maria'
console.log(names); // [ 'Alex', 'John', 'Jane', 'Max' ] removed maria ^




// Adding elements to the beginning of the array

names.unshift('James');
console.log(names); // [ 'James', 'Alex', 'John', 'Jane', 'Max' ]

names.unshift('Mary', 'Jessie');
console.log(names); // ['Mary',  'Jessie','James', 'Alex','John',  'Jane','Max']

// Removing elements from the beginning of the array
names.shift(); // 'Mary'
names.shift(); // 'Jessie'
names.shift(); // 'James'
console.log(names); // [ 'Alex', 'John', 'Jane', 'Max' ]


