// Indexes of substring or characters

// Index of()

let company = 'TechGlobal';

company.charAt(4); //'G'

company.indexOf('G'); // 4

company.indexOf('l'); // 5


'aaa'.indexOf('a'); // 0
'aaa'.lastIndexOf('a'); // 2

company.lastIndexOf('X'); // -1
company.indexOf('X'); //-1




let word = 'John-12';
console.log(word.indexOf('-1')); // 4
console.log(word.indexOf('-2')); // -1


/*
indexOf()
TASK: used to get the first occurence (index) of the matching substring
RETURN: it reeturns the found index of the substring as a number
        it returns -1 if the substring is not found within the original string
ARGUMENTS: it takes a substring to search within the original string
CHANGE ORIGINAL VALUE: does not cahnge the original value
STATIC OR NON STATIC: non-static
*/


let day = 'Sunday';

// check if the day includes 'Sun'
console.log(day.includes('Sun')); // true 
console.log(day.indexOf('Sun')); // 0
console.log(day.indexOf('Sun') >= 0); // true 
console.log(day.indexOf('Wed') === -1); // true 


// search()
let sentence = 'I go back to back';
console.log(sentence.indexOf('back')); // 5
console.log(sentence.lastIndexOf('back')); // 13
console.log(sentence.search('back'));

