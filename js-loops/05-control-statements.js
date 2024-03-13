// we dont want to see 6 and 13
// we dont want to get any number that is 15 or more

for(let i = 1; i <= 15; i++) {
    if(i === 6 || i === 13) continue;
    else if(i === 15) break;
    console.log('The number is', i);
}