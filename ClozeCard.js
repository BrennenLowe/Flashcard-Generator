function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function() {
        var rep = text.replace(cloze, "...");
        return rep;
    }
    this.fullText = text;
}

module.exports = ClozeCard;