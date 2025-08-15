function getProductOf(arrayOfNumber){
	let product = 1;
	for(let index = 0; index < arrayOfNumber.length; index++){
			product *= arrayOfNumber[index];
	}
	return product;
}









let ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getProductOf(ages));


