//Write a function that takes an array of numbers and returns the products and all numbers using a loop.

function productNumbers(numbers) {
	let product = 1;
	for (let index = 0; index < numbers.length; index++) {
	product *= numbers[index];
	}
	return product;
}

let num = [6, 9, 4, 5, 7];
console.log(productNumbers(num));