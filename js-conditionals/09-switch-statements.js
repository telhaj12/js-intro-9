
let num = 5
let letter; // undefined if number is not 1 2 or 3


switch (num) {
    case 1:
        letter = 'A';
        break;
    case 2:
        letter = 'B';
        break;
    case 3:
        letter = 'C'
        break;
    default:
        letter = '';
}
console.log(letter);



/*
0 Sunday
1 Monday
.
.
.
.
. Saturday 

in case it returns 0 or 6, print 'WEEKEND'
otherwise, print 'WEEKDAY'
*/

date = new Date();
let day = date.getDay(); // return 0 to 6 inclusive 

switch (day) {
    case 0: 
    case 6
    console.log('Weekend');
    break;
    default
    console.log('WEEKDAY');
    break;
}
