var ClozeCard = require("./ClozeCard.js");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
var threePointersCloze = new ClozeCard(
    "Stephen Curry holds the NBA record for most 3-pointers in a single season.", "Stephen Curry");
var winsRecordCloze = new ClozeCard(
    "The Golden State Warriors hold the NBA record for most wins in a season with 73.", "73");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States."
console.log(firstPresidentCloze.partial()); 

// "George Washington was the first president of the United States."
console.log(firstPresidentCloze.fullText);

// three pointers cloze
console.log(threePointersCloze.cloze);
console.log(threePointersCloze.partial());
console.log(threePointersCloze.fullText);

// wins record cloze
console.log(winsRecordCloze.cloze);
console.log(winsRecordCloze.partial());
console.log(winsRecordCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");