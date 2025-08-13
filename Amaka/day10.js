function day10(arrayOfNumbers){
	let lowestElementOfArray = [];
	let minimum1 = arrayOfNumbers[0];
	let minimum2 = minimum1;

	for(let index = 0; index < arrayOfNumbers.length; index++){
			if (arrayOfNumbers[index] < minimum1) {
				minimum2 = minimum1;
				minimum1 = arrayOfNumbers[index];
			}
	} lowestElementOfArray.push(minimum2, minimum1);
		return lowestElementOfArray;

}

let ages = [23, 45, 12, 76, 45];
console.log(day10(ages));
