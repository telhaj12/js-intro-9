r1 = Math.floor(Math.random() * 10 - 1 + 1) + 1
r2 = Math.floor(Math.random() * 10 - 1 + 1) + 1
r3 = Math.floor(Math.random() * 10 - 1 + 1) + 1
console.log(r1);
console.log(r2);
console.log(r3);
if(r2 > r1) { 
console.log('The greatest is ' + r2);
}

else if(r3 > r1) {
console.log('The greatest is ' + r3);
}
else {
console.log('The greatest is ' + r1);
}


console.log('\n----------------------------------------------\n');



function concat(word1, word2) {
return word1 + word2;
}
let word1 = 'hello'
let word2 = 'world'

console.log(concat(word1, word2));


console.log('\n----------------------------------------------\n');

r1 = Math.floor(Math.random() * 3 - 1 + 1) + 1
r2 = Math.floor(Math.random() * 3 - 1 + 1) + 1

if( r1 === r2) {
console.log('true');
}
else { console.log('false');
}


console.log('\n----------------------------------------------\n');



r1 = Math.floor(Math.random() * 10) + 1
r2 = Math.floor(Math.random() * 10) + 1
r3 = Math.floor(Math.random() * 10) + 1

console.log(r1);
console.log(r2);
console.log(r3);
let greatest = Math.max(r1, r2, r3)
let least = Math.min(r1, r2, r3)

console.log(Math.abs((greatest - least)));

function firstCharacter(str) {
    return str.charAt(0);
    }
    console.log(firstCharacter('hello'));


    console.log('\n----------------------------------------------\n')


    









