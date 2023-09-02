const convertToCelsius = function(argTemp) {

  let resultFahrenheit = 0;

  resultFahrenheit = (argTemp-32)*(5/9);

  return Math.round(resultFahrenheit*10)/10; 
  
};

const convertToFahrenheit = function(argTemp) {

  let resultCelcius = 0;

  resultCelcius = argTemp*(9/5) + 32;

  return Math.round(resultCelcius*10)/10;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
