//Write a function that counts how many times each elements appears in an array and returns an object with element counts
function countDuplicate(array){
	let countingAmountArray = []
	let obj = {}
		for(let count = 0; count < array.length;count++){
				sum = 0
				if (!(countingAmountArray.includes(array[count]))){
					countingAmountArray.push(array[count])

				for(let counter = 0; counter < array.length;counter++){
					if(array[count] == array[counter]) sum++
					}
					obj[array[count]] = sum
					}
				
			}
		

		return obj
}

let arra = [1,2,3,4,5,6,7,1,7,2,3,4,5,6,1,8]
let arrangeNane = [1,2,3,4,5,1,1,4,5,1,7,8,9,1,2,4,5,4]
console.log(countDuplicate(arra))

