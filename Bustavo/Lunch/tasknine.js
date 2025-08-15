//Write a function that counts how many times each elements appears in an array and returns an object with element counts

arr = [1,2,3,4,5,1,1,4,5,1,7,8,9,1,2,4,5,4]
for(let count = 0;count < arr.length;count++){
		let sum = 0
	for(let counter = 0; counter < arr.length;counter++){
		if(arr[count] == arr[counter]) sum++
		}
		console.log(`${arr[count]} is ${sum}`)
	}