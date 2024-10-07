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
  return num * 2;
};

console.log(arrowSquares(5));
