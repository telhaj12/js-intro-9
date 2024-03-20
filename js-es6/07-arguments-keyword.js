// This is not an ES6 feature
function funcA(arg1, arg2) {
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));
    console.log(arguments);
}
funcA(15, 20);

// This is not an ES6 feature
function funcB(arg1, arg2) {
    // arguments keyword can be used to collect your arguments in an array-like object
    // you can switch out argument[0] with arg1, and argument[1] with arg2
    if(typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
        console.log('Both arguments are numbers');
    }
    else if(typeof arguments[0] === 'string' && typeof arguments[1] === 'string'){
        console.log('Both arguments are strings');
    }
    else{
        console.log('These are different types');
    }
}

funcB(15, 20);
funcB('abc', 'xyz');
funcB('abc', false);