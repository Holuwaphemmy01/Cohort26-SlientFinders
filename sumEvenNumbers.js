function sumEvenNumbers(number) {
	let array = 0
	for(let count = 0; count < number.length; count++) {
		if( number[count] % 2 == 0) {
			 array += number[count]
	}
		}
return array;
		}
let arrayInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumEvenNumbers(arrayInput))