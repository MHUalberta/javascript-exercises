const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, curr) => sum+curr, 0);
};

const multiply = function(array) {
  return array.reduce((mult, curr) => mult*curr);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let factorial = 1;
  for (let i = 0; i < a; i++)
    factorial *= a-i;
  return factorial;
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
