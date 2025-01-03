const fibonacci = function(n) {

  if (n < 0) {
    n = "OOPS";
    return n;
  }

  if (n <= 1) {
    return Number(n);
  }

  return Number(fibonacci(n - 1) + fibonacci(n - 2));
};

// Do not edit below this line
module.exports = fibonacci;
