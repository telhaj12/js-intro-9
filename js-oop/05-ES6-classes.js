/*
Create a class called Cat
Create a constructor which takes below information and defines template to create many objects from the class
name, color, age

Create 3 functions as below
makesSound() -> 'MEOW'
eat() -> 'EAT'
sleep() -> 'SLEEP'

*/

// INTERVIEW QUESTION how do you creat a class?

class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    makeSound() {
        console.log('MEOW');
    }
    eat() {
        console.log('EAT');
    
    }
    sleep() {
        console.log('SLEEP')
    }
}

const cat1 = new Cat('Simba', 'Orange', 1);
const cat2 = new Cat('Lucy', 'White', 2);
const cat3 = new Cat('Oliver', 'Brown', 3);

const cats = [ cat1, cat2, cat3 ];

let oldest = cats[0];

for(const cat of cats) {
    console.log(cat);
    cat.makeSound();
    cat.eat();
    cat.sleep();
    console.log();

    if(cat.age > oldest.age) oldest = cat;
}
console.log('Oldest', oldest);

const oldest2 = cats.reduce((old, cat) => {
    if(cat.age > old.age) return cat;
    return old;
});

console.log('Oldest', oldest);
console.log('Oldest', oldest2);