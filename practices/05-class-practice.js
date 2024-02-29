// Task 1

r1 = Math.floor(Math.random() * 100) + 1

console.log(r1);

if(r1 <= 50) {
    console.log(r1, 'Is in the 1st half')
} else {console.log(r1, 'Is in the 2nd half')}
if(r1 <= 25) {
    console.log(r1, 'Is in the 1st quarter') 
}
else if(r1 <= 50) {
     console.log(r1, 'Is in the 2nd quarter') }
else if(r1 <= 75) {
 console.log(r1, 'Is in the 3rd quarter')
} 
else 
console.log(r1, 'Is in the 4th quarter')


console.log('\n-------------------------------------------------\n');

t1 = Math.floor(Math.random() * 100) + 1
t2 = Math.floor(Math.random() * 100) + 1
t3 = Math.floor(Math.random() * 100) + 1
console.log(t1, t2, t3);
console.log(t1 % 2 === 0 && t2 % 2 === 0 && t3 % 2 === 0);



console.log('\n-------------------------------------------------\n');


let t2character = 'i';

let t2ascii = t2character.charCodeAt(0);


if(48 <= t2ascii && t2ascii <= 57) console.log(`${t2character} is a digit`); 
else if(65 <= t2ascii && t2ascii <= 90 || (97 <= t2ascii && t2ascii <= 122)) console.log(`${t2character} is a letter`);
else if(t2ascii === 32) {
    console.log(`${t2ascii} is a whitespace`);
}
else {
    console.log(`${t2ascii} is a special character`);
}

console.log('\n--------------------------------------------------\n');


function hasBlue(word) {
    return 'blue'.includes(word.toLowerCase());
}
console.log(hasBlue('BLUE'));


console.log('\n--------------------------------------------------\n');


function startT(word1) {
    return word1.toLowerCase().startsWith('t');

}

console.log(startT('TBlue'));















