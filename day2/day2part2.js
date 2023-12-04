const fs = require('fs');
let input = fs.readFileSync('day2/input.txt', 'utf8').split("\n");

let sum = 0;

input.forEach(line => {
    let gameId = 0;
    slicedLine = line.split(": ")[1].split("; ");
    gameId = line.replace("Game ", "").split(":")[0];
    let numBlue = 1;
    let numRed = 1;
    let numGreen = 1;
    slicedLine.forEach(slice =>{
        if(slice.includes("blue")){
            if(parseInt(slice.split("blue")[0].slice(-3, -1)) > numBlue){
                numBlue = parseInt(slice.split("blue")[0].slice(-3, -1));
            }
        }
        if(slice.includes("red")){
            if(parseInt(slice.split("red")[0].slice(-3, -1)) > numRed){
                numRed = parseInt(slice.split("red")[0].slice(-3, -1));
            }
        }
        if(slice.includes("green")){
            if(parseInt(slice.split("green")[0].slice(-3, -1)) > numGreen){
                numGreen = parseInt(slice.split("green")[0].slice(-3, -1));
            }
        }
    })
    sum += numBlue * numRed * numGreen;
});
console.log(sum + "\n");