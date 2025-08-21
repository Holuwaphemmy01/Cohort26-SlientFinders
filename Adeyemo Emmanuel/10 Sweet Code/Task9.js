function returnObject(number) {
	let evenArray = [];
	let oddArray = [];

for(let count = 0; count < number.length; count++) {
	if (count % 2 == 0) {
		evenArray.push(count);
	}
}
for (let count = 0; count < number.length; count++) {
	if (count % 2 == 1) {
		oddArray.push(count);
		}
	}

return [evenArray, oddArray]
}

let numbers = [3,4,5,2,5,6,8,9,7,6,5,6,8,4,2,4,5,6,7,84,];

console.log(returnObject(numbers));