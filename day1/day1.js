const fs = require('fs');

let sum = 0;
let input = fs.readFileSync('day1/input.txt', 'utf8').split("\n");
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let numbersText = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

input.forEach(line => {
    const fixText = () => {
        for(let c = 0; c < numbersText.length; c++){
            while(line.includes(numbersText[c])){
                line = line.replace(numbersText[c], numbersText[c].slice(0,1) + numbers[c] + numbersText[c].slice(numbersText[c].length - 1, numbersText[c].length));
            }
        }
    }
    let numA = "";
    let numB = "";
    fixText();
    for (let a = 0; a < line.split("").length; a++) {
        //get the first number
        if(numbers.includes(line.split("")[a])){
            numA = line.split("")[a];
        }
    }
    for (let b = line.split("").length; b > -1; b--) {
        //get the last number
        if(numbers.includes(line.split("")[b])){
            numB = line.split("")[b];
        }
    }
    if(parseInt(numB + numA) > 0){
        sum += parseInt(numB + numA);
    }
});

console.log("sum: " + sum);