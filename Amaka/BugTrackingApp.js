function bugClean(arrayOfNumbers){
	
	let newArrayOfNumbers = []
	for (let count = 0; count < arrayOfNumbers.length; count++) {
		if (arrayOfNumbers[count] >= 1 && arrayOfNumbers[count] <= 5){
			newArrayOfNumbers.push(arrayOfNumbers[count]);
		}
	}
	return newArrayOfNumbers;

} 


let scores = [1, 0, 6, 3, 4, 5, 7, 9, 67];
console.log(bugClean(scores));