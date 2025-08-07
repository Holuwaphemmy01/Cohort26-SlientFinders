function clearArray(arrayOfInvalidInput) {
	let newArray = []

	for (let invalidInput in arrayOfInvalidInput) {
		if (arrayOfInvalidInput[invalidInput]  <=  0 || arrayOfInvalidInput[invalidInput]  >=  6) {
			continue;
		} else {
			newArray .push(arrayOfInvalidInput[invalidInput]);
		}
	}
return newArray;
}

let array = [0,1,2,3,4,5,6,7,,8,6,9,98,8,9,0,0,0]

console.log(clearArray(array))