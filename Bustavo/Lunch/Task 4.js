const getOdd = (array) =>{ 
	let evenArray = array.filter((number) => number % 2 == 0)
	return evenArray.reduce((sum,element) => sum + element)
	}


newArray = [5,12,15,14,17,25,21,23,22,11,19]
console.log(getOdd(newArray))
