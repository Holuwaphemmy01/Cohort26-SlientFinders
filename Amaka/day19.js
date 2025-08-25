function getTheOutlierOf(arrayOfNumbers){
	let countEven = 0;
	let countOdd = 0;
	let evenOutlier;
	let oddOutlier;
	let index;
	for(index = 0; index < arrayOfNumbers.length; index++){
		if (arrayOfNumbers[index] % 2 == 0){
			evenOutlier = arrayOfNumbers[index];
			countEven++;
		} else {
			oddOutlier = arrayOfNumbers[index];
			countOdd++;
		}
	}
	if (countEven == 1)
		return evenOutlier;
	else if (countOdd == 1)
		return oddOutlier;
}

let age = [2, 4, 0, 100, 4, 11, 2602, 36]
console.log(getTheOutlierOf(age))

console.log(getTheOutlierOf([160, 3, 1719, 19, 11, 13, -21]))


