console.time();
const fs = require('fs');
let input = fs.readFileSync('day6/input.txt', 'utf8').split("\n");

let timeLine = input[0].replace("Time:", "").split(" ").join("");
let distanceLine = input[1].replace("Distance:", "").split(" ").join("");

let numberOfWays = 0;

for (let i = 1; i < timeLine; i++) {
    const potentialDistance = i * Math.pow(i, 2) + (timeLine - i) * i;
    if (potentialDistance > i * (timeLine - i)) {
        numberOfWays++;
    }
}
    
console.log(numberOfWays);
console.timeEnd();