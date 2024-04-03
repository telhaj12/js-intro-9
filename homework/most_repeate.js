//TASK - 13
/*Requirement: 
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> "pen"
mostRepeated([10])  -> 10
mostRepeated(["TechGlobal"])  -> "TechGlobal"
*/


function mostRepeated(arr) {
    const countMap = {};

    for(const element of arr) { // 4
        if(!countMap[element]) countMap[element] = 1;
        else countMap[element] = countMap[element] + 1; 
    }
    // countMap = { '4': 4, '7': 1, '23': 3 }
    let mostCount = 0;
    let mostCounted;
    for(const [key, value] in Object.entries(countMap)) { // 
        if(value > mostCount) {
            mostCount = value;
            mostCounted = key;
        }
    }
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));