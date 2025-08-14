function findProduct(numbers) {
let total = 1;
for (let count = 1; count <= numbers.length; count++) {
	total = total * count;
		
	}
return total;
}

let number = [1,2,3,4,5,6];

console.log(findProduct(number));