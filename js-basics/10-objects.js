const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    adrress: 'Chicago'
};
// Get student1 information
console.log(student1);


// Get specific info about student1

console.log(student1.firstName); // 'John'
console.log(student1.age);

// Update properties of the object
student1.address = 'Miami'

console.log(student1);


// adding a new property 
student1.phoneNumber = '000-000-0000';
student1.ssn = '000-00-0000';
student1.favMovie = 'Harry Potter';

console.log(student1);


//deleting existing properties 
delete student1.phoneNumber;
delete student1.ssn;
delete student1.favMovie;
delete student1.favClass;

console.log(student1);