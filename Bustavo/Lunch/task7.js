function joinArrays(array1,array2){
	length = array1.length + array2.length
	newarray = array1
	let counter = 0
	for(count = array1.length; count < length;count++){
			newarray.push(array2[counter])
			counter++
			}
	return newarray

	}

array1 = [2,3,4,5]
array2 = [7,8,9,10]
console.log(joinArrays(array1 ,array2))

