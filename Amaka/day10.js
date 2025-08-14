function getTheSumOfTheSmallerElementsOf(arrayOfNumbers){
	if (!arrayOfNumbers == 2) {
		console.log("Array must be atleast two items")
		return;
	}
	if (!arrayOfNumbers.every(element => element > 0)) {
		return;
	}
	if (!arrayOfNumbers.every(element => element % 1 == 0)) {
		return;
	}
	let sumOflowestPositiveElements;
	let minimum1 = Infinity;
	let minimum2 = Infinity;

	for(let index = 0; index < arrayOfNumbers.length; index++){
			if (arrayOfNumbers[index] < minimum1) {
				minimum2 = minimum1;
				minimum1 = arrayOfNumbers[index];
			}
			if (arrayOfNumbers[index] <  minimum2 && arrayOfNumbers[index] !== minimum1){
				minimum2 = arrayOfNumbers[index];
			}

	} sumOflowestPositiveElements = minimum2 + minimum1;
	
		return sumOflowestPositiveElements;
}


function getTheLargerElementsOf(arrayOfNumbers){
	let largerElementsOfArray = [];
	let maximum1 = arrayOfNumbers[0];
	let maximum2 = maximum1;

	for(let index = 0; index < arrayOfNumbers.length; index++){
			if (arrayOfNumbers[index] > maximum1) {
				maximum2 = maximum1;
				maximum1 = arrayOfNumbers[index];
			}
			if (arrayOfNumbers[index] > maximum2 && arrayOfNumbers[index] != maximum1)
				maximum2 = arrayOfNumbers[index];
	} largerElementsOfArray.push(maximum2, maximum1);
		return largerElementsOfArray;
}








let ages = [1, 23, 45, 12, 76, 48, 3];
 console.log(getTheLargerElementsOf(ages));
console.log(getTheSumOfTheSmallerElementsOf(ages));
