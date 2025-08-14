function productOfNumbers(array){
	let product = 1;

	for(let numbers = 1; numbers <= array.length; numbers++){
		product *= numbers;
	}
	return product;
}

const numbers = [1, 2, 3, 4];
const result = productOfNumbers(numbers);
console.log(result);