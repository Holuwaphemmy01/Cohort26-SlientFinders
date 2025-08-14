function productOfNumbers(number) {
		let array = 1
	for(let count = 1; count < number.length; count++) {
		 array *= count
		}
return array
	}
let input = [1, 2, 3, 4, 5]
console.log(productOfNumbers(input))