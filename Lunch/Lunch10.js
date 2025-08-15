function getEvenAndOddObjectOf(arrayOfNumbers){
	let count = { even: [], odd: [] };
	for(let index = 0; index < arrayOfNumbers.length; index++){
		let element = arrayOfNumbers[index];
		if (element % 2 == 0){
			count['even'].push(element);
		}else if (element % 2 != 0 ) {
			count['odd'].push(element);
		}
		
	}
	return count;

}
	


let ages = [5, 6, 5, 8, 9, 4];
console.log(getEvenAndOddObjectOf(ages));













