function getEvenSumOf(arrayOfNumber){
	let evenSum = 0;
	for(let index = 0; index < arrayOfNumber.length; index++){
		if (arrayOfNumber[index] % 2 == 0)
			evenSum += arrayOfNumber[index];
	}
	return evenSum;
}









let ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getEvenSumOf(ages));

