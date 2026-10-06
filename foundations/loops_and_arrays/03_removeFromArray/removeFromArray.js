const removeFromArray = function (arr, ...targets) {
  return arr.filter((element) => !targets.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
