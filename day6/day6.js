const fs = require('fs');
let input = fs.readFileSync('day6/input.txt', 'utf8').split("\n");

let timeLine = input[0].replace("Time:", "").split(" ");
timeLine = timeLine.filter((number) => number !== "");
let distanceLine = input[1].replace("Distance:", "").split(" ");
distanceLine = distanceLine.filter((number) => number !== "");
let result = 1;
for (let i = 0; i < timeLine.length; i++) {
    let numberOfWays = 0;
    for (let j = 0; j < timeLine[i]; j++) {
        if(j * (timeLine[i] - j) > distanceLine[i]){
            numberOfWays++;
        }
    }
    result = result * numberOfWays;
}
console.log(result);