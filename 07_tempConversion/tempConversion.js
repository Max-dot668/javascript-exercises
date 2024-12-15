const convertToCelsius = function(fahr) {
    let celsius = (fahr - 32) * (5.0 / 9.0);
    let roundedCelsius = Number(celsius.toFixed(1));
    return roundedCelsius;
};

const convertToFahrenheit = function(celsius) {
    let fahr = celsius * (9.0 / 5.0) + 32;
    let roundedFahr = Number(fahr.toFixed(1));
    return roundedFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
