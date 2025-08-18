//write a function that takes an array of numbers and returns the product of all the numbers using a loop//

let numbers = [2,3,4,5,6,7,8,9,10,11]

function arrayOfNumbers(numbers){
	let squareNumbers = [];
	for(let index = 0; index < numbers.length; index++ ){
		squareNumbers.push(numbers[index] * numbers[index]);
	}
return 	squareNumbers;

}

console.log(arrayOfNumbers([1,3,5,7,9]));
