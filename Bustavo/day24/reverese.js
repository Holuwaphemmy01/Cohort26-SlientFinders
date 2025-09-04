function reverseArray(array,reverseSize){
	reverseSize = array.length - reverseSize
	newArr = array.slice(reverseSize,array.length)
	newArr.push(array.slice(0,reverseSize))
	 arr = newArr.flat(1)
	return arr
	}
input =  nums = [1,2,3,4,5,6,7]
console.log(reverseArray(nums,3))