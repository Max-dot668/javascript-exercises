const removeFromArray = function (arr, ...target) {
  return arr.filter((element) => !target.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
