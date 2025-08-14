function getTheHighestAndLowestOf(stringOfNmbers){
	let arrayOfStrings = stringOfNmbers.split(" ");
	let arrayOfNumbers = arrayOfStrings.map(Number);
	let highest = 0;
	let lowest = Infinity;
	console.log(arrayOfNumbers);

	for(let index = 0; index < arrayOfNumbers.length; index++){
		if (arrayOfNumbers[index] > highest)
			highest = arrayOfNumbers[index];
			console.log(highest)
		if (arrayOfNumbers[index] < lowest)
			lowest = arrayOfNumbers[index];
	}
	console.log(highest, lowest);
	return arrayOfNumbers.filter(number => number === highest || number === lowest);
}


let input = "1 2 3 4 5"
console.log(getTheHighestAndLowestOf(input));






