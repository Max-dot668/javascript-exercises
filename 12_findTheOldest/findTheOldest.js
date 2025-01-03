const findTheOldest = function(arr) {
  // Get current year for people still alive
  const currentYear = new Date().getFullYear();
  
  let ages = arr.map(item => {
    const death = item.yearOfDeath || currentYear;
    return death - item.yearOfBirth;  // this return is just for the map  
  });
  
  let oldestAge = 0;
  let index = 0;
  
  for (let i = 0; i < ages.length; i++) {
      if (oldestAge < ages[i]) {
          oldestAge = ages[i];
          index = i;
      }
  }

  return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
