const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const initialVal = 0;
	const totalSum = arr.reduce((sum, current) => sum + current, initialVal
  );
  return totalSum;
};

const multiply = function(arr) {
  const totalProd = arr.reduce((prod, current) => prod * current
  );
  return totalProd;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
