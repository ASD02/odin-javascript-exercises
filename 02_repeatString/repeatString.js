const repeatString = function(word, value) {
    finalWord = "";
    for (let i = 0; i < value; i++) {
        finalWord += word;
    }
    return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
