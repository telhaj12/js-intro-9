// Extracting partial strings (substring)

let language = 'JavaScript'

// slice()

language.slice(0, 4); // 'Java' start with start index stop at endindex. (0,1,2,3) dont include 4
console.log(language.slice(0, 4));

language.slice(4, 10)
console.log(language.slice(4, 10));

console.log(language.slice(4)); // Script

let quote = 'Practice makes it perfect!';

/*
'Practice'
'perfect'
'makesit perfect'
*/
  
  console.log(quote.slice(18, 25));
  console.log(quote.slice(0, 8));
  console.log(quote.slice(9));


  /*
  TASK: USED TO EXTRACT PARTIAL STRING FROM ORIGINAL STRING BY USING INDEXES
  RETURN: it returns a partial string (substring)
            slice(startIndex) -> this will extract a sunstring starting from the startIndex going all the way til the end
            slice(startIndex, endIndex) ->

    
  ARGUMENTS: no arguments
  CHANGE ORIGINAL VALUE: does not cahnge original value
  STATIC OR NON STATIC: non-static
  */

  //tricky parts
  console.log('abc'.slice(5)); // ''
  console.log('abc'.slice(4, 10)); // ''
  console.log('abc'.slice(2, 100)); // 'c'


// negative indexes
console.log(('JavaScript'.slice(-3))); // 'ipt'
console.log(('JavaScript'.slice(-6))); //'Script'
console.log(('JavaScript'.slice(-10, -6))); // 'Java'
console.log(('JavaScript'.slice(-5, -7))); // ''

console.log('Hello'.slice(3, 2)); // ''


// substring()

let obj = 'Table';
console.log(obj.substring(0, 3)); // 'Tab'
console.log(obj.substring(1)); // 'able'


console.log(obj.slice(-2)); // 'le'
console.log(obj.substring(-2)); // 'Table'

console.log(obj.substring(-5, -10)); // ''

/*
The only difference between slice() and substring() is the way they handle 
*/



// Split() method
let shoppingList = 'Apple, Orange, Bananas, Milk, Eggs';
 
shoppingList.split(', ');
const shoppingListArray = shoppingList.split(', ');
console.log(shoppingListArray);
//  Array ['Apple', 'Orange', 'Bananas', 'Milk', 'Eggs',]

console.log(shoppingListArray[0]); // Apple
console.log(shoppingListArray[2]); // Bananas


/*
Mouse | Computer | Keyboard   -> ' | '

Today is Sunday -> 'is'  ['Today ', ' Sunday']
Today is Sunday -> 'ay' ['Tod', ' is Sund', '']
hello world -> 'l'  ['he', '', 'o wor', 'd']
*/



/* 
TASK: used to split the string into array elements with the given separator
RETURN: returns an array 
ARGUMENTS: takes on argument 
CHANGE ORIGINAL VALUE: does not change original value
STATIC OR NON STATIC: non-static
*/

