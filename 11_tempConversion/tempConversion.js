const convertToCelsius = function(fahr) {
  let celsius = (fahr - 32) / (9/5);
  let roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function(celsius) {
  let fahr = (celsius * (9/5)) + 32;
  let roundedFahr = Math.round(fahr * 10) / 10;
  return roundedFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
