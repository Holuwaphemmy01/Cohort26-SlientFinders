function countNumber(number) {
	let duplicate = [];
for (let count = 0; count < number.length; count++) {
	for (let counter = count; counter < number.length - 1; counter++) {
		if(number[count] === number[counter]) {
			duplicate = number[counter];
		}
	}
	}
return duplicate;
}

let number = [1,1,2,3,4,4,4,2,2];
console.log(countNumber(number))