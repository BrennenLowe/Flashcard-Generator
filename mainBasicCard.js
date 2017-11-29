var BasicCard = require("./BasicCard.js");

// basic card
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
var threePointersBasic = new BasicCard(
    "Who holds the NBA record for most 3-pointers in a single season?", "Stephen Curry");
var winsRecordBasic = new BasicCard(
    "The Golden State Warriors hold the NBA record for most wins in a season with how many?", "73");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back); 

console.log(threePointersBasic.front);
console.log(threePointersBasic.back);

console.log(winsRecordBasic.front);
console.log(winsRecordBasic.back);