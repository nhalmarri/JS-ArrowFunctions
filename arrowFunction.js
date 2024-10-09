// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = () => {
  console.log("Hello, Nora");
};

greet();

// Write a simple arrow function that takes two parameters and returns their sum.

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(5, 4));

// Write a simple arrow function that squares a number.

const arrowSquares = (num) => {
  const numberSquared = Math.pow(num, 2);

  return numberSquared;
};

console.log(arrowSquares(5));

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayOfNumbersSquared = (numArray) => {
  return numArray.map(arrowSquares);
};

console.log(arrayOfNumbersSquared(numbers));
