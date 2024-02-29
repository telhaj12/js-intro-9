// Searching in strings 

let company = 'TechGlobal'

// startsWith() method

company.startsWith('T'); // true
company.startsWith('t'); // false

company.startsWith('Tech'); // true 
company.startsWith('TechGlobal'); //true 

company.startsWith('Global'); // false
console.log(company.startsWith('');) // true 

/*
TASK: used to check if the string starts with another substring 
RETURN: IT RETURNS A boolean (true or false)
ARGUMENTS: takes one or two arguments (substring, substring and position)
CHANGE ORIGINAL VALUE: does not change original value
STATIC OR NON STATIC : non-static 
*/

company.endsWith('Global'); // true 
company.endsWith('l'); // true 
company.endsWith('al'); // true 

/* 
ends with-
TASK: used to check if the string starts with another substring 
RETURN: IT RETURNS A boolean (true or false)
ARGUMENTS: takes one or two arguments (substring, substring and position)
CHANGE ORIGINAL VALUE: does not change original value
STATIC OR NON STATIC : non-static 
*/

console.log(company); // 'TechGlobal'

company.startsWith('Global'); // false
console.log(company.startsWith('Global'))
console.log(company.startsWith('Global', 4)); // true


company.includes('hGl'); // true 
company.includes('Gl'); // true 


/* 
Includes-
TASK: used to check if the string starts with another substring 
RETURN: IT RETURNS A boolean (true or false)
ARGUMENTS: takes one or two arguments (substring, substring and position)
CHANGE ORIGINAL VALUE: does not change original value
STATIC OR NON STATIC : non-static 
*/


