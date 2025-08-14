function addEvenNumbers(array){
	let sum = 0
	for (let count = 0; count < array.length; count++){

		if ( array[count] % 2 === 0){
		sum += array[count];
		
}
}

return sum;
}



const array = [2,3,4,5,6,8,7,9,7,4,2,4,];
let result = addEvenNumbers(array);
console.log(result);