function getArray(array){
	sum = array.reduce((sum, element) =>sum + element)
	total = sum
	 array = array.map((element) => sum -= element)
		array.unshift(total)
		return array
	}

arrayVal = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
arrayVal2 = [1,2,3,4,5,6]
console.log((getArray(arrayVal)))
console.log((getArray(arrayVal2)))

