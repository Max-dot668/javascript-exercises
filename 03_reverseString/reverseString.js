const reverseString = function(word) {
    let i = word.length - 1;
    let reverseString = "";
    while (i >= 0) {
	reverseString += word.at(i);
	i--;
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
