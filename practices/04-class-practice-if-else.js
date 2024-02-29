const {CharacterHelper} = require('../utils/CharacterHelper');
const {generateRandomNumber} = require('../utils/MathHelper');




let t1num1 = 0;
let t1num2 = 0;
if(t1num1 === t1num2) console.log(true);
else console.log(false);


t1num1 === t1num2 ? console.log(true) : console.log(false);

console.log(t1num1 === t1num2); // Best solution to solve task 1 lecture 02-13-24

// Task 2 
/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"


Test data 1:
"v"

Expected result 1:
"v"  is a letter

Test data 2:
"5"

Expected result 2:
"5"  is a digit
*/

let t2character = 'm';

let t2ascii = t2character.charCodeAt(0);


if(48 <= t2ascii && t2ascii <= 57) console.log(`${t2character} is a digit`); 
else if(65 <= t2ascii && t2ascii <= 90 || (97 <= t2ascii && t2ascii <= 122)) console.log(`${t2character} is a letter`);
else console.log('INVALID INPUT');


// getting 48 and 57 from ascii chart in notes checking characters



 let t3character = 'b';

 let t3ascii = t3character.charCodeAt(0);


 if(65 <= t3ascii && t3ascii <= 90) console.log(`${t3character} is an upper case letter`); 
   else if(97 <= t3ascii && t3ascii <= 122) console.log(`${t3character} is a lower case letter`);
  else console.log('INVALID INPUT');







let t4character = '5'
let t4ascii = t4character.charCodeAt(0);

if((65 <= t4ascii && t4ascii <= 90) || (97 <= t4ascii && t4ascii <= 122) || 
(48 <= t4ascii && t4ascii <= 57) || (t4character === 32))
console.log(`"${t4character}" is not a special character`);
else console.log(`"${t4character}" is a special character`);


let t5character = '%'
let t5ascii = t5character.charCodeAt(0)



if((65 <= t5ascii && t5ascii <= 90) || (97 <= t5ascii && t5ascii <= 122)) {
    // I will check if it is a vowel or not
    if('aeiouAEIOU'.includes(t5character)) {
       console.log(`"${t5character}" is a vowel`);
    }
    else{ 
       console.log(`"${t5character}" is not a vowel`);
    }
}
else {
  console.log('INVALID INPUT');
}


console.log(CharacterHelper.isVowel('A'));
console.log(CharacterHelper.isVowel('b'));
console.log(CharacterHelper.isVowel('I'));


