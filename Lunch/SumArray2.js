//Give an array numbers, write a functon that sums up all the even numbers in the array.

function sumEvenNumbers(numbers) {
	let sum = 0;
	for (let index = 0; index < numbers.length; index++) {
	if (numbers[index] % 2 == 0) {
	sum += numbers[index];
		}
	}
	return sum;
}

