// Teacher constructor with fname, lname, age, field properties
function Teacher(fname, lname, age, field) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.major = field;
}
// Create 2 Teacher Prototype methods as teach and giveHomework with empty bodies
Teacher.prototype.teach = function() {
    console.log(`${this.firstname} teaches ${this.major}.`);
}
Teacher.prototype.giveHomework = function() {
    console.log(`${this.firstname} gives homework.`);
}

// Create 3 Teacher Objects

const teacher1 = new Teacher('Alex', 'Morgan', 47, 'Math');
const teacher2 = new Teacher('Bobby', 'B', 45, 'Botanical Sciences');
const teacher3 = new Teacher('Johnny', 'B', 45, 'Chemical Engineer');


// Store all the ages in an array -> [47, 45, 45]
// Store all the first names in an array -> [ 'Alex', 'Bobby', 'Johnny' ]
// Find and print ythe information of the oldest teacher -> Alex is oldest with the age 47

const teachers = [ teacher1, teacher2, teacher3 ];

const ages = teachers.map(teacher => teacher.age);

console.log(ages); // [ 47, 45, 45 ]

const names = teachers.map(teacher => teacher.firstname);

console.log(names); // [ 'Alex', 'Bobby', 'Johnny' ]

// let oldest = teachers[0];

//for(const teacher of teachers) {
 //   if(teacher.age > oldest.age) oldest = teacher;
// }
const oldest = teachers.reduce((acc, curr) => {
    return curr.age > acc.age ? curr : acc;
    // if(curr.age > acc.age) return curr;
    // return acc;
});


console.log(`${oldest.firstname} is the oldest with the age ${oldest.age}`); // Alex is the oldest with the age 47






/* const teacher1 = new Teacher('Mustafa', 'Bond', 25, 'PT');
const teacher2 = new Teacher('Rabe', 'A', 26, 'CS');

console.log(teacher1.firstname); // Mustafa
console.log(teacher1.lastname); // Bond
console.log(teacher1.major); // PT

console.log(teacher2);
*/
