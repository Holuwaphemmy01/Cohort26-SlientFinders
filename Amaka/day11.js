function getTheHighestAndLowestOf(stringOfNmbers){
	let arrayOfStrings = stringOfNmbers.split(" ");
	let arrayOfNumbers = arrayOfStrings.map(Number);
	let highest = 0;
	let lowest = Infinity;

	for(let index = 0; index < arrayOfNumbers.length; index++){
		if (arrayOfNumbers[index] > highest)
			highest = arrayOfNumbers[index];
		if (arrayOfNumbers[index] < lowest)
			lowest = arrayOfNumbers[index];
	}
	let result = arrayOfNumbers.filter(number => number === highest || number === lowest);
	return `${result.join(" ")}`;

}


let input = "1 2 3 4 5"
console.log(getTheHighestAndLowestOf(input));

let input1 = "1 9 3 4 -5"
console.log(getTheHighestAndLowestOf(input1));


let input2 = "1 2 -3 4 5"
console.log(getTheHighestAndLowestOf(input2));









