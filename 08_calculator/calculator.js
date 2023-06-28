const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	if(arr.length === 0) {
    return 0
  }
  const sum = arr.reduce((prevVal, nextVal) => {
    return prevVal + nextVal;
  });
  return sum
};

const multiply = function(...arr) {
  const sum = arr.reduce((prevVal, nextVal) => {
    return prevVal * nextVal;
  });
  return sum
};

const power = function(num, pwr) {
	return num ** pwr
};

const factorial = function(num) {
	if (num === 0 || num === 1){
    return 1
  }
  let sum = 1
  for (let i = 1; i <= num; i++){
    sum *= i
  }
  return sum
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
