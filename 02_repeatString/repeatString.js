const repeatString = function(word, num) {
    let word_looped = "";

    if (num < 0) {
	word = "ERROR";
	return word;
    }
    else {

    for (let i = 0; i < num; i++) {
	word_looped += word;
    }
 
	return word_looped;
    }
};

// Do not edit below this line
module.exports = repeatString;
