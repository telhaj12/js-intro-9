// Replacing some characters or substrings within a string 


let str = 'I like apple and pineapple';

let strReplaced = str.replace('apple', 'orange');
let strReplacedAll = str.replaceAll('apple', 'orange');

console.log(str); // 'I like apple and pineapple'
console.log(strReplaced); // 'I like orange and pineapple'
console.log(strReplacedAll); // 'I like orange and pineorange'


/*
TASK: used to replace and occurence of a substring within the original string
RETURN: it returns a new string with the replaced value
ARGUMENTS: TAKES 2 ARGUMENTS; TARGET AND SOURCE
CHANGE ORIGINAL VALUE: does not change original value
STATIC OR NON STATIC: non static

The difference between replace() and replaceAll()
Replace() -replaces only first occurence
replaceAll()- replaces all occurences
*/

let word = 'Hello World';
console.log(word.replace('Hi', 'XXX')); // 'Hello World'
console.log(word.replace(' ', '###'));


