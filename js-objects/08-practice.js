/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/
const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: [ 'Soccer', 'Watching movies'],
    exam_scores: {
        midterm: 60,
        final: 90
    }
};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print first hobby -> Soccer
*/

console.log(student.hobbies); // [ 'Soccer', 'Watching movies' ]
console.log(student.exam_scores); // { midterm: 60, final: 90 }
console.log(student.hobbies[0]); // Soccer

/*
Find and print the sum of the exam scores -> 75
*/


console.log(((student.exam_scores.midterm + student.exam_scores.final) / 2));






/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/


const book = {
    name: 'Amok',
    author: {
        fname: 'Stefan',
        lname: 'Zweig'
    },
    genre: 'Novella'
};

console.log(book);
console.log(book.author);




const books = [
    {
        name: 'Amok',
        author: {
            fname: 'Stefan',
            lname: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My Name Is Red',
        author: {
            fname: 'Orhan',
            lname: 'Pamuk'
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            fname: 'George',
            lname: 'Orwell'
        },
        genre: 'Dystopian Literature'
    }
];

// Count the books where the author has an 'a' -> 2

// console.log(books[0].author.fname);
// console.log(books[1].author.fname);
// console.log(books[2].author.fname);

let countNamesWithA = 0;

for(let i = 0; i < books.length; i++) {
    if(books[i].author.fname.toLowerCase().indexOf('a') >= 0) countNamesWithA++; // or use '.includes'
}
console.log(countNamesWithA); // 2


countNamesWithA = 0;

for(const book of books) {
    if(book.author.fname.toUpperCase().includes('A')) countNamesWithA++;
}
console.log(countNamesWithA);

const titles = [];

for(const book of books) {
    titles.push(book.name);
}
console.log(titles); // [ 'Amok', 'My Name Is Red', '1984' ]
