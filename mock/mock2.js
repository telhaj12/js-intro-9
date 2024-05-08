/*
Write a function named as countVowels() which takes a string word as an argument and returns the 
count of the vowel letters when invoked. 
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
 */
const countVowels = (word) => word.split('').filter(x => 'AEIOUaeiou'.includes(x)).length;


console.log(countVowels("Hello")); // -> 2
console.log(countVowels("World")); // -> 1
console.log(countVowels("JavaScript")); // -> 3
console.log(countVowels("AI")); // -> 1
console.log(countVowels("")); // -> 0



/*

Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when invoked.
 NOTE: Make your code dynamic that works for any numbers and return an empty array if there are 
 no numbers divisible by 5 in the range of given 2 numbers.
  Assume you will not be given negative numbers.
*/
const getMultipleOf5 = (num1, num2) => {
    let multipleOf5 = [];

    for (let i = num1; i <= num2; i++) {
        if (i % 5 === 0) {
            multipleOf5.push(i);
        }
    }
    return multipleOf5
}
console.log(getMultipleOf5(10, 30));   // -> [ 10, 15, 20, 25, 30 ]
console.log(getMultipleOf5(17, 25));   // -> [ 20, 25 ]
console.log(getMultipleOf5(3, 8));     // -> [ 5 ]
console.log(getMultipleOf5(2, 4));     // -> []

/*
Write a function named as isPrime() which takes a number as an argument and returns true 
if the number is prime or returns false otherwise when invoked. NOTE: Mathematically, 
the Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. 
The smallest prime number is 2 and 2 is the only even prime number. 
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31… 
NOTE: The smallest prime number is 2 and there are no negative prime numbers.
*/
const isPrime = (num) => {
    if (num === 2) return true;
    if (num < 2) return false;
    if (num % 2 === 0) return false;
    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(30));
console.log(isPrime(324));






/*
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:

n! = n * (n-1) * (n-2) * ... * 2 * 1

Examples:
factorial(5)   	-> 120
factorial(4)  	-> 24
factorial(0)  	-> 1
factorial(1)  	-> 1
*/

const factorial = (n) => n === 0 || n === 1 ? 1 : n * factorial(n - 1);

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));




/*
Write a function named as countConsonants() which takes a string word as an 
argument and returns the count of the consonant letters when invoked.
 NOTE: A letter that is not vowel is considered as a consonant letter.


 Examples:
countConsonants("Hello")   			    -> 3
countConsonants("Hello World")   		-> 8
countConsonants("JavaScript is fun")   	-> 12
countConsonants("")   			        -> 0
*/



/*
Write a function named as getEvens() which takes 2 number arguments and returns all the
 even numbers as an array stored from smallest even number to greatest even number when invoked.
  NOTE: Make your code dynamic that works for any numbers and return an empty array if there
   are no even numbers in the range of given 2 numbers. Assume you will not be given negative numbers.


   Examples:
getEvens(2, 7)  	-> [ 2, 4, 6 ]
getEvens(17, 5)  	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)  	-> [ 4 ]
getEvens(3, 3)  	-> [ ]
*/
function getEvens(num1, num2) {
    let evens = [];

    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        }
    } return evens;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));


const getEvens1 = (num1, num2) => {
    let evens = [];

    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        }
    }
    return evens;
}
console.log(getEvens1(2, 7));
console.log(getEvens1(17, 5));
console.log(getEvens1(4, 4));
console.log(getEvens1(3, 3));

/*
Write a function named removeDuplicates() which takes an array argument and returns a new array with
 all the duplicates removed.

 Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])   		 -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3])   				         -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])   			         -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])   			     -> ["1", "2", "3"]
*/



/*
Write a function named countA() which takes a string argument and returns how many A or a there 
are in the given string when invoked. NOTE: Ignore case sensitivity


Examples:
countA("TechGlobal is a QA bootcamp")   	-> 4
countA("QA stands for Quality Assurance")   -> 5
countA("Cypress")   					    -> 0
*/



/*
Write a function named no3and5() which takes an array of integer numbers as argument and will
 return a new array with elements replaced by conditions below. If element can be divided by 5, 
 replace it with 99 If element can be divided by 3, replace it with 100 If element can be divided by
  both 3 and 5, replace it with 101


  Examples:
no3and5([7, 4, 11, 23, 17])   		-> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])   		    -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])   -> [99, 11, 100, 13, 14, 101]

*/



/*

Write a function named as factorial() which takes a number as an argument and returns the factorial 
of the number when invoked. NOTE: Mathematically, the factorial of a non-negative integer 
n is defined as:


n! = n * (n-1) * (n-2) * ... * 2 * 1



Examples:
factorial(5)   	-> 120
factorial(4)  	-> 24
factorial(0)  	-> 1
factorial(1)  	-> 1
*/



/*
Write a function named no13() which takes an array of numbers as argument and return a new array
 with all 13s replaced with 0s.

Examples:
no13([1, 2, 3 ,4])   		 -> [1, 2, 3 ,4] 
no13([13, 2, 3])   		     -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])   			         -> []
*/



/*
Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns 
the given word back tripled if the string length is even or doubled if the string length is odd when
 invoked.

Examples:
doubleOrTripleWord("Tech")   	-> "TechTechTech"
doubleOrTripleWord("Apple")   	-> "AppleApple"
doubleOrTripleWord("")   		-> ""
doubleOrTripleWord(" ")   		-> " "
doubleOrTripleWord("1")   		-> "11"
doubleOrTripleWord("22")   		-> "222222"

*/




/*
Write a function named noVowel() which takes a string argument and returns a new string with 
all vowels removed from the original string​.

Examples:
noVowel("TechGlobal")   -> "TchGlbl"
noVowel("AEOxyz")       -> "xyz"
noVowel("Javascript")   -> "Jvscrpt"
noVowel("")             -> ""
noVowel("125$")         -> "125$"


*/




/*
Write a function named as startVowel() which takes a string word as an argument and returns true 
if given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

Examples:
startVowel("Hello")   	-> false
startVowel("Apple")   	-> true
startVowel("orange")    -> true
startVowel("")   	    -> false
startVowel("	")   	-> false
startVowel("123")   	-> false


*/




/*
Write a function named as startVowel() which takes a string word as an argument and 
returns true if given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

Examples:
startVowel("Hello")   	-> false
startVowel("Apple")   	-> true
startVowel("orange")    -> true
startVowel("")   	    -> false
startVowel("	")   	-> false
startVowel("123")   	-> false


*/




/*
Write a function named noVowel() which takes a string argument and returns a new string with 
all vowels removed from the original string​.

Examples:
noVowel("TechGlobal")   -> "TchGlbl"
noVowel("AEOxyz")       -> "xyz"
noVowel("Javascript")   -> "Jvscrpt"
noVowel("")             -> ""
noVowel("125$")         -> "125$"



*/





/*
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns 
the string back with its first and last words swapped when invoked.
 NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World")   		-> "World Hello"
swapFirstLastWord("I like JavaScript") 	-> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")   	-> "bar bar foo foo"
swapFirstLastWord("")   			    -> ""
swapFirstLastWord("	")   			    -> ""
swapFirstLastWord("Hello")   			-> ""
swapFirstLastWord("Hello   ")   		-> ""



*/




/*
Write a function named no13() which takes an array of numbers as argument and return a 
new array with all 13s replaced with 0s.

Examples:
no13([1, 2, 3 ,4])   		 -> [1, 2, 3 ,4] 
no13([13, 2, 3])   		     -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])   			         -> []


*/



/*
Write a function named as getEvens() which takes 2 number arguments and returns all 
the even numbers as an array stored from smallest even number to greatest even number when invoked. 
NOTE: Make your code dynamic that works for any numbers and return an empty array 
if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)  	-> [ 2, 4, 6 ]
getEvens(17, 5)  	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)  	-> [ 4 ]
getEvens(3, 3)  	-> [ ]



*/


/*
Write a function named noDigit() which takes a string argument and returns a new string with 
all digits removed from the original string​.

Examples:
noDigit("")   				    -> ""
noDigit("Javascript")   		-> "Javascript"
noDigit("123Hello")   			-> "Hello"
noDigit("123Hello World149")   	-> "Hello World"
noDigit("123Tech456Global149")  -> "TechGlobal"


*/




/*
Write a function named countWords() which takes a string argument and returns the total count 
of words in the given string when invoked. NOTE: Be careful about the 
extra whitespaces before and after the string.

Examples:
countWords("     Javascript is fun       ")   		    -> 3
countWords("Cypress is an UI automation tool.    ")   	-> 6 
countWords("1 2 3 4")   					            -> 4



*/



/*
Write a function named arrFactorial() which takes an array of numbers as argument and 
return the array with every number replaced with their factorials.

Examples:
arrFactorial([1, 2, 3 ,4])  -> [1, 2, 6, 24]
arrFactorial([0, 5])   		-> [1,120]
arrFactorial([5 , 0, 6])   	-> [120, 1, 720]
arrFactorial([])   		    -> []


*/
const arrFactorial = (arr) => {
    return arr.map(num => {
        let fac = 1;
        for (let i = 2; i <= num; i++) {
            fac *= i;
        }
        return fac;
    })

};


console.log(arrFactorial([1, 2, 3, 4])) //  -> [1, 2, 6, 24]
console.log(arrFactorial([0, 5]))   		//-> [1,120]
console.log(arrFactorial([5, 0, 6]))   //	-> [120, 1, 720]
console.log(arrFactorial([]))   		   // -> []




const swap4 = str => {
    if (str.trim().length <= 8) return '';

    return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);
}

console.log(swap4('abc'));
console.log(swap4('javascript'));




const no3and5 = arr => arr.map(x => {
    if (x % 3 === 0 && x % 5 === 0) return 101;
    else if (x % 3 === 0) return 100;
    else if (x % 5 === 0) return 99;
    else return x;
});

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));



const firstDuplicate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));




const getMultipleof5 = (num1, num2) => {
    let multiple = [];
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    for (let i = min; i <= max; i++) {
        if (i % 5 === 0) {
            multiple.push(i);
        }
    }
    return multiple;
}

console.log(getMultipleof5(3, 17));
console.log(getMultipleof5(20, 15, 10, 5,)) // 	-> [ 5, 10, 15]
console.log(getMultipleof5(5)) // 	-> [ 5, 10, 15]
console.log(getMultipleof5()) // 	-> [ 5, 10, 15]




const no3and5 = (arr) => {
let x = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 15 === 0)
            x.push(101);
        else if (arr[i] % 3 === 0)
        x.push(100);
        else if (arr[i] % 5 === 0)
            return 99;
    }
    return x;
}
