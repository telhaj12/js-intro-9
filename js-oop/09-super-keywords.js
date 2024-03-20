class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        console.log('PARENT CONSTRUCTOR is executed')
    }
    // methods
}



class Customer extends Person{
    constructor(fname, lname, age, id) {
        super(fname, lname, age);
        this.id = id;
        console.log('CHILD CONSTRUCTOR is executed')
    }
}

const cust = new Customer('John', 'Doe', 25, 1);
console.log(cust);