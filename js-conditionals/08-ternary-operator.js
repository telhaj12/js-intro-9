let gender = 'female';
// let fname;

// if(gender === 'male') {
//     fname = 'Alex';
// }
// else {
//     fname = 'Emma';
// }

// using ternary instead of if-else above
// condition ? true-statement  : false-statement;

// gender === 'male' ? fname = 'Alex' : fname = 'Emma';

let fname = gender === 'female' ? 'Emma' : 'Alex';

console.log(fname); // Emma

let number = 1;

number % 2 === 0 ? console.log('EVEN') : console.log('ODD');


let num2 = 9;

// if(num2 > 0) {
//     console.log('POSITIVE')
// }
// else if(num2 < 0) {
//     console.log('NEGATIVE');
// }
// else {
//     console.log('ZERO');
// }



/*

*/

  // it will be either GREAT(70+) or GOOD(< 70)

//   mock_score >= 70 ? console.log('GREAT') : console.log('GOOD'); logging the mood W/O storing

let mock_score = 70;

// let mood = mock_score >= 70 ? 'GREAT' : 'GOOD'; // storing mood in variable to be used for rest of the 

console.log('The mood is', mood);

let name;

name = true ? 'John' : 'Jane';
