// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];

let firstOdd;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        firstOdd = city;
        break;
    }
}
console.log(firstOdd);


// Find all the cities that has a length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]

const citiesWithLength6orMore = [];

for(const city of cities) {
    if(city.length >= 6) citiesWithLength6orMore.push(city);
}
console.log(citiesWithLength6orMore);


// Find all cities with i or I in it -> Berlin Chicago Kyiv Istanbul

const citiesWithI = [];

for(const city of cities) {
    if(city.toLowerCase().includes('i')) citiesWithI.push(city);
}
console.log(citiesWithI);