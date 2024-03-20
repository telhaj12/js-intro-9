// BEFORE ES6
// Create a template with constructor function 

function Person () {

}

Person.prototype.eat = function () {
    console.log('EAT');
}

Person.prototype.sleep = function () {
    console.log('SLEEP');
}

function Programmer () {

}


// Inherit all the person methods into Programmer
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function () {
    console.log('CODE');
}

const programmer_mustafa = new Programmer();

programmer_mustafa.code();
programmer_mustafa.eat();
programmer_mustafa.sleep();


// Create Singer template which inherits from Person and add sing method to it.
// Create a Singer object and execute the sing(), eat() and sleep() method

function Singer () {
}
Singer.prototype = Object.create(Person.prototype);

Singer.prototype.sing = function () {
        console.log('SING');
}


const singer_tareq = new Singer();
singer_tareq.sing();
singer_tareq.eat();
singer_tareq.sleep();