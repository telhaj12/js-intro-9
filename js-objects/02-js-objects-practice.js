const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami', 'Berlin', 'Madrid', 'Monaco'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: 12345,
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
};


// Find a print peron's city and state together -> 'Chicago, IL'
// Find and print the person's favorite cities
// Print GOOD GUY if the person likes JS, or 'STAY AWAY GUY' otherwise 

console.log(`${person.address.city}, ${person.address.state}`);
console.log(person.favCities);

if(person.likesJS) console.log('GOOD GUY');
else console.log('STAY AWAY GUY');

