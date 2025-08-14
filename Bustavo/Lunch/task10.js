function getOddEven(array){
	odd = array.filter((element) => element % 2 == 1)
	even = array.filter((element) => element % 2 == 0)
	const objectEvenandOdd = {
			evenNumbers : even,
			oddNumbers : odd,
			}
		
		
return objectEvenandOdd

	}


array = [2,3,4,5,6,7,9,10,11,15,13]
console.log(getOddEven(array))