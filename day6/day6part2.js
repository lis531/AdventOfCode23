console.time();
const fs = require('fs');
let input = fs.readFileSync('day6/input.txt', 'utf8').split("\n");

let timeLine = input[0].replace("Time:", "").split(" ").join("");
let distanceLine = input[1].replace("Distance:", "").split(" ").join("");
let numberOfWays = 0;
for (let i = 0; i < distanceLine; i++) {
    if(i * (timeLine - i) > distanceLine){
        numberOfWays++;
    }
}
console.log(numberOfWays);
console.timeEnd();