const palindromes = function (word) {
  word = word.split(" ").join('');
  let reversed = word.split("").reverse().join('');
  let lowerCaseWord = word.toLowerCase();
  let lowerCaseReversed = reversed.toLowerCase();
  
  let checkWord = lowerCaseWord.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  let checkReversed = lowerCaseReversed.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');

  return checkWord === checkReversed;
};


// Do not edit below this line
module.exports = palindromes;
