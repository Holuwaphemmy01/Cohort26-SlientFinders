function sumAllEven(number) {
	let total = 0;
for (let count = 0; count <= number.length; count++) {
	if (count % 2 === 0) {

			total += count;
		}
	}
return total;
}

let numbers = [2,3,4,5,6,7,8,4,5,6];
console.log(sumAllEven(numbers));