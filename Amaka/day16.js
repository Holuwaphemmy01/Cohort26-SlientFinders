function getIntegersFrom(number){
	let arrayOfNumbers = []
	for(let value = number; value > 0; value--){
		arrayOfNumbers.push(value);
	}
	return arrayOfNumbers;
}

console.log(getIntegersFrom(5));