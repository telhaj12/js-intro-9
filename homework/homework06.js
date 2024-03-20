/*
// Task 1
Requirement:
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("")  ->  ""
noSpace("Javascript")  ->  "Javascript"
noSpace("    Hello   ")  -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld”
noSpace("Tech Global")  -> "TechGlobal"
*/

const noSpace = (string) => {
    return string.trim().split(" ").join('');
};
console.log(noSpace("Javascipt"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global"));

/*
TASK 2
Requirement:
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("")  ->  ""
replaceFirstLast("Hello")  ->  "oellH"
replaceFirstLast("Tech Global")  -> "lech GlobaT"
replaceFirstLast("A")  -> ""
replaceFirstLast("    A      ")  -> ""
*/

const replaceFirstLast = (string) => {
    if(string.length < 2) return ("");
    let middle = string.slice(1, string.length - 1);
    return string[string.length - 1] + middle + string[0];
} ;
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"))
console.log(replaceFirstLast("    A      "));


/*
TASK 3
Requirement:
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true
*/
 const hasVowel = (string) => {
    const stringArray = string.toLowerCase().split("");
    return stringArray.some(x => 'aeiou'.includes(x))
 };
 console.log(hasVowel(""));
 console.log(hasVowel("Javascript"));  
 console.log(hasVowel("Tech Global"));  
 console.log(hasVowel("1234"));
 console.log(hasVowel("ABC"));
/*
Task 4
 Requirement:
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID
*/

const checkAge = (birthYear) => {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    if(age > 0 && age < 16) return "AGE IS NOT ALLOWED";
    else if(age >= 16 && age <= 120) return 'AGE IS ALLOWED';
    else return 'AGE IS NOT VALID';
}
console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));

/*
TASK 5
Requirement:
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/

const averageOfEdges = (num1, num2, num3) => {
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);
    average = (min + max) / 2;
    return average;
};

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));


/*
TASK 6
Requirement:
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", 
"javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", 
"###"]
*/

const noA = (strArray) => strArray.map(x => {
    if(x.toLowerCase().startsWith('a')) return '###';
    else return x;
})
console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

/*
TASK 7
Requirement:
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
*/

const no3and5 = (array) => {
    return array.map( (x) => { if(x % 5 === 0 && x % 3 === 0) {
       return x = 101;
    } else if (x % 3 === 0) {
    return  x = 100 ;
   } else if (x % 5 === 0) {
       return  x = 99;
   }else return x;
})}

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));

/*
TASK 8
Requirement:
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  -> 5
*/

function cPrimes (num) { 
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }return true;
}

const countPrimes = (numbers) => { 
    let count = 0;
    for (const num of numbers) {
      if(cPrimes(num) === true) count ++
    }return count;
        
}
console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));
/*
TASK 9
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", 
"123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
*/

const removeDuplicates = (array) => [...new Set(array)];

console.log(removeDuplicates([10,20,35,20,35,60,70,60]));
console.log(removeDuplicates([1,2,5,2,3]));
console.log(removeDuplicates([0,-1,-2,-2,-1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(['1', '2', '3','2', '3']));


/*
TASK 10

Requirement: 
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
Examples:
isDateFormatValid("")  -> false
isDateFormatValid("15/30/2020")  -> false
isDateFormatValid("10-30-2020 ")  -> false
isDateFormatValid("10.30.2020")  -> false
isDateFormatValid("5/30/2020")  -> false
isDateFormatValid("05/30/2020 ")  -> true
isDateFormatValid("10/2/2020")  -> false
isDateFormatValid("10/02/2020 ")  -> true
*/
function isDateFormatValid (string) {
    let newString = string.split('/').join('');
    if(newString > 12319999) return false;
    if (newString.length !== 8) return false;
    return(!isNaN(newString))
}
console.log(isDateFormatValid(''));
console.log(isDateFormatValid('15/30/2020'));
console.log(isDateFormatValid('10-30-2020'));
console.log(isDateFormatValid('10.30.2020'));
console.log(isDateFormatValid('5/30/2020'));
console.log(isDateFormatValid('05/30/2020'));
console.log(isDateFormatValid('10/2/2020'));
console.log(isDateFormatValid('10/02/2020'));


/*
TASK 11
Requirement: 
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
NOTE: Be careful when there is multiple max numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 5
secondMax([10])  -> 10
*/
const secondMax = (array) => {
    
    let min = -Infinity;
    const arrMax = Math.max(...array);
    if (array.length < 2) return array[0];
    for (let i = 0 ; i < array.length; i++) {
        if(array[i] > min && array[i] < arrMax) min = array[i]
    }return min;
}
console.log(secondMax([ 7, 4, 4, 23, 23, 23,]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMax([10]));


/*
TASK 12
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.
NOTE: Be careful when there is multiple min numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 4
secondMax([10])  -> 10
*/
const secondMin = (array) => {
    if(array.length < 2) return array.join('');
   const newArr = [...new Set(array)]
    newArr.sort((a, b) => a-b)
    return newArr[1]
}  

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])) 
console.log(secondMin([3, 4, 5, 6])); 
console.log(secondMin([10]));



//TASK - 13
/*Requirement: 
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> "pen"
mostRepeated([10])  -> 10
mostRepeated(["TechGlobal"])  -> "TechGlobal"
*/

const mostRepeated = (array) => {
    let highestCount = 0;
    let mostReptElement;
       
    for(let i = 0; i < array.length; i++){
        let count = 0;
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j]) count++;
       }
        if(count > highestCount){
        highestCount = count;
        mostReptElement = array[i]; 
        }
    }
    
   return mostReptElement; 
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));
console.log(mostRepeated([10]));
console.log(mostRepeated(["TechGlobal"]));