const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(array) {
	let sum = array.reduce((currentSum, number) => {
    return currentSum + number;
  }, 0);

  return sum;
};

const multiply = function(array) {
  const multiply = array.reduce((multiplied, current) => {
    return multiplied * current;
  }, 1);

  return multiply;
};

const power = function(firstNumber, secondNumber) {
	return firstNumber ** secondNumber;
};

const factorial = function(number) {
  let answer = 1;

  while(number)
  {
    answer = number * answer;
    number--;
  }

  return answer;
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
