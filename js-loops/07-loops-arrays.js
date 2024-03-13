const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];
console.log('\n---------------for loop--------------\n')
// Looping array elements with for loop
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


console.log('\n---------------for..of loop--------------\n')
//looping array elements with for .. of loop
for(const name of names) {
    console.log(name);
}


// Count how many names starts with j or J  -> 3
let count = 0;
for(let i = 0; i < names.length; i++) {
    if(names[i][0] === 'J' || names[i][0] === 'j') {
        count++;
    }
}
console.log(`There are ${count} names that start with 'j' or 'J'.`);

console.log('\n---------------for..of loop j--------------\n')
let countJ1 = 0;

for(const name of names) {
    if(name.toLowerCase().startsWith('j')) countJ1++;
}

console.log('The total count of names starting with j is = ', countJ1);
console.log('\n---------------for loop j--------------\n')

let countJ2 = 0;

for(let i = 0; i <= names.length; i++) {
    if(names[i].toUpperCase()[0] === 'J') countJ2++;
}
console.log('The total count of names starting with j is = ', countJ2);