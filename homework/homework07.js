/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

const hasUpperCase = (str) => {
    return str.split('').filter(i => i >= 'A' && i <= 'Z').length > 0;
}
console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John")); // true
console.log(hasUpperCase("john")); // false
console.log(hasUpperCase("125.0")); // false
console.log(hasUpperCase("")); // false



/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/

const noDigit = (string) => {
    return string.split('').filter(i => i < '0' || i > '9;').join(''); 
}


console.log(noDigit("")) // -> ""
console.log(noDigit("Javascript")) // -> "Javascript"
console.log(noDigit("123Hello"))  //-> "Hello"
console.log(noDigit("123Hello World149")) // -> "Hello World”
console.log(noDigit("123Tech456Global149")) // -> "TechGlobal"

/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/

const noVowel = (str) => {
    return str.split('').filter(i => !('aeiou'.includes(i.toLowerCase()))).join('')
}
console.log(noVowel("TechGlobal"))
console.log(noVowel("AEOxyz"))
console.log(noVowel("Javascript"))
console.log(noVowel(""))
console.log(noVowel("1234$"))

/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/

const no13 = (arr) => {
    return arr.map(i => {
        if(i === 13) return 0
        else return i;
    })
}
// another way to write the code in one line using ternary
const nom13 = (arr1) => arr1.map(i => i === 13 ? 0 : i);
console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13]));
console.log(no13([]));

console.log(nom13([1, 2, 3, 13]));