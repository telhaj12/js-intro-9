const user = {
    username: 'john-doe',
    password: 'test1234',
    email: 'john@gmail.com',
    age: 45,
    city: 'Chicago',
}

// Object destructuring -> NOT preferred 
// const username = user.username;
// const password = user.password;
// const email = user.email;


// PREFERRED WAY of Object destructuring
const {username, password, email} = user;

console.log(username, password, email);
