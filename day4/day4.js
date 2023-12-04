const fs = require('fs');
let input = fs.readFileSync('day4/input.txt', 'utf8').split("\n");
let sum = 0;

input.forEach((line) => {
    line = line.split(":")[1];
    let numbers = line.trim().split(" | ")[0];
    let winningNumbers = line.trim().split(" | ")[1];
    winningNumbers = winningNumbers.split(" ");
    winningNumbers = winningNumbers.filter((number) => number !== "");
    numbers = numbers.split(" ");
    numbers = numbers.filter((number) => number !== "");
    let tempSum = 0;
    numbers.forEach((number) => {
        if (winningNumbers.includes(number)) {
            if(tempSum === 0) {
                tempSum = 1;
            }
            else {
                tempSum = tempSum*2;
            }
        }
    });
    sum += tempSum;
});
console.log(sum);