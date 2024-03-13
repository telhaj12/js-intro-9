const person = {
    first_name: 'Adam',
    last_name: 'Smith',
    date_of_birth: 1790,
    isAlive: false,
    fullName: function () {
        console.log(this.first_name, this.last_name);
    },
    info: function () {
        return `${this.first_name} ${this.last_name} was born in ${this.date_of_birth}.`;
        // return this.first_name + '' + this.last_name + ' was born in ' + this.date_of_birth + '.';
    }
};
 // 'this' is a keyword that refers to the current object IE person
 // create a person function as info and t prints info shown -> 'Adam Smith was born in 1790.'
person.fullName(); // Adam SMith

console.log(person.info()); // Adam Smith was born in 1790.