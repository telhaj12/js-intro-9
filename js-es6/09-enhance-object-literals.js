let program = 'SDET';
let batch = 9;

// Before ES6

const student_rabe =  {
    program: program,
    batch: batch,
    fullname: 'Rabe a'
};

// After ES6 - Enhanced Object Literals

const student_ameer =  {
     program,
     batch,
     fullname: 'Ameer a'
};

console.log(student_rabe);
console.log(student_ameer);

// Destructuring 
const {program: course, batch: courseNumber, fullname} = student_ameer