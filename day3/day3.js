const fs = require('fs');
let input = fs.readFileSync('day3/input.txt', 'utf8').split("\n");
const symbols = ["#", "/", "*", "&", "@", "$", "+"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbolsPosition = [];
let numbersPosition = [];

input.forEach((line) => {
    let splitedLine = line.split("");
    let lineNumber = input.indexOf(line);
    for(let i = 0; i < splitedLine.length; i++){
        for(let j = 0; j < symbols.length; j++){
            if(splitedLine[i] == symbols[j]){
                symbolsPosition += [i, lineNumber];
                // console.log(symbolsPosition);
            }
        }
    }
    for(let i = 0; i < splitedLine.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(splitedLine[i] == numbers[j]){
                numbersPosition += [i, lineNumber];
                // console.log(numbersPosition);
            }
        }
    }
    for(let i = 0; i < symbolsPosition.length; i++){
        if(symbolsPosition[i] == numbersPosition[i]){
            console.log(numbersPosition[i]);
        }
    }
});