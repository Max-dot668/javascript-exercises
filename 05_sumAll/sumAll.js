const sumAll = function(begin, end) {
    let sum = 0;
    
    // check for non-integer parameters
    if (begin < 0 || end < 0) {
	sum = "ERROR";
	return sum;
    }
    // check for non-number parameters
    if (!(Number.isInteger(begin)) || !(Number.isInteger(end))) {
	sum = "ERROR";
	return sum;
    }
    
    if (begin > end) {
	for (let i = begin; i >= end; i--) {
	    sum += i;
	}
    }
    else { // begin < end
	for (let i = begin; i <= end; i++) {
	    sum += i;
	}
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
