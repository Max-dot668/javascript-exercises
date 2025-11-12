const repeatString = function(string, num) {
    let counter = 0;
    let result = "";
    if (num < 0) {
        return "ERROR";
    }
    while (counter < num) {
        result += string;
        counter++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
