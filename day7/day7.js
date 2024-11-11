const fs = require('fs');
let input = fs.readFileSync('day7/input.txt', 'utf8').split("\n");

let bids = input.map(bid => bid.split(" ")[1]);
let hands = input;

let allResults = [];
let i = 0;

hands.forEach(hand => {
    hand = hand.split(" ")[0];
    i++;
    let A = hand.match(/A/g) === null ? 0 : hand.match(/A/g).length;
    let K = hand.match(/K/g) === null ? 0 : hand.match(/K/g).length;
    let Q = hand.match(/Q/g) === null ? 0 : hand.match(/Q/g).length;
    let J = hand.match(/J/g) === null ? 0 : hand.match(/J/g).length;
    let T = hand.match(/T/g) === null ? 0 : hand.match(/T/g).length;
    let NINE = hand.match(/9/g) === null ? 0 : hand.match(/9/g).length;
    let EIGHT = hand.match(/8/g) === null ? 0 : hand.match(/8/g).length;
    let SEVEN = hand.match(/7/g) === null ? 0 : hand.match(/7/g).length;
    let SIX = hand.match(/6/g) === null ? 0 : hand.match(/6/g).length;
    let FIVE = hand.match(/5/g) === null ? 0 : hand.match(/5/g).length;
    let FOUR = hand.match(/4/g) === null ? 0 : hand.match(/4/g).length;
    let THREE = hand.match(/3/g) === null ? 0 : hand.match(/3/g).length;

    let cardCounts = [A, K, Q, J, T, NINE, EIGHT, SEVEN, SIX, FIVE, FOUR, THREE];
    let highestCount = Math.max(...cardCounts);
    let highestCardIndex = cardCounts.indexOf(highestCount);
    let cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3'];
    let highestCard = cards[highestCardIndex];

    
    console.log("A: ", A, "K: ", K, "Q: ", Q, "J: ", J, "T: ", T, "9: ", NINE, "8: ", EIGHT, "7: ", SEVEN, "6: ", SIX, "5: ", FIVE, "4: ", FOUR, "3: ", THREE);
    let highestResult = 0;
    
    switch(highestCard){
        case("A"):
            highestResult = highestCount * 14;
            break;
        case("K"):
            highestResult = highestCount * 13;
            break;
        case("Q"):
            highestResult = highestCount * 12;
            break;
        case("J"):
            highestResult = highestCount * 11;
            break;
        case("T"):
            highestResult = highestCount * 10;
            break;
        case("9"):
            highestResult = highestCount * 9;
            break;
        case("8"):
            highestResult = highestCount * 8;
            break;
        case("7"):
            highestResult = highestCount * 7;
            break;
        case("6"):
            highestResult = highestCount * 6;
            break;
        case("5"):
            highestResult = highestCount * 5;
            break;
        case("4"):
            highestResult = highestCount * 4;
            break;
        case("3"):
            highestResult = highestCount * 3;
            break;
        default:
            highestResult = highestCount * 2;
            break;
    }
    console.log("Highest result: ", highestResult);
    allResults.push(highestResult);
});

console.log(allResults);
console.log(bids);
let connectedArray = [];
for (let i = 0; i < allResults.length; i++) {
    connectedArray.push({i: [allResults[i], bids[i]]});
    connectedArray.sort((a, b) => a.i[0] - b.i[0]);
}

console.table(connectedArray);

let result = 0;
connectedArray.forEach((item, index) => {
    result += item.i[1] * (index + 1);
});

console.log(result);