function returnInverse(array){	
	for(let count = 0; count < array.length;count++){
			if(array[count] > 0) array[count] = -1 * array[count]
			else array[count] = -1 * array[count]
			}
	return array
}
array =  [1, -2, 3, -4, 5]
array2 = [1, 2, 3, 4, 5]
console.log(returnInverse(array))
console.log(returnInverse(array2))


