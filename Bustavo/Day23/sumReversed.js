function getArray(array){
	newArray = []
	sum = array.reduce((sum, element) =>sum + element)
		newArray.push(sum)
	for(var count = 0; count < array.length;count++){
			sum-= array[count]
			newArray.push(sum)
			}
		return newArray

	}

arrayVal = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
console.log((getArray(arrayVal)))
