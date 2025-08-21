function getAddictiveInverseOf(arrayOfNumbers){
	let arrayOfAddictiveInverse = [];
	for(let index = 0; index < arrayOfNumbers.length; index++){
		arrayOfAddictiveInverse.push(-1 * (arrayOfNumbers[index]));
	}
	return arrayOfAddictiveInverse;
}





let temperatureValues = [1, -2, 3, -4, 5];
console.log(getAddictiveInverseOf(temperatureValues));


console.log(getAddictiveInverseOf([1, 2, 3, 4, 5]));
