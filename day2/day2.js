const fs = require('fs');
let input = fs.readFileSync('day2/input.txt', 'utf8').split("\n");

let sum = 0;
const red = 12;
const green = 13;
const blue = 14;

input.forEach(line => {
    let gameId = 0;
    slicedLine = line.split(": ")[1].split("; ");
    gameId = line.replace("Game ", "").split(":")[0];
    let possible = true;
    slicedLine.forEach(slice =>{
        // console.log(slice);
        if(slice.includes("blue")){
            // console.log(parseInt(slice.split("blue")[0].slice(-3, -1)));
            let number = parseInt(slice.split("blue")[0].slice(-3, -1));
            // console.log("blue: " + number);
            if(number <= blue){
            }
            else{
                return possible = false;
            }
        }
        if(slice.includes("red")){
            let number = parseInt(slice.split("red")[0].slice(-3, -1));
            // console.log("red: " + number);
            if(number <= red){
                // console.log("red " + number);
            }
            else{
                return possible = false;
            }
        }
        if(slice.includes("green")){
            let number = parseInt(slice.split("green")[0].slice(-3, -1));
            // console.log("green: " + number + "\n");
            if(number <= green){
                // console.log("green " + number);
            }
            else{
                return possible = false;
            }
        }
    })
    if(possible){
        sum += parseInt(gameId);
        console.log(possible + " " + gameId);
    }
});
console.log(sum + "\n");