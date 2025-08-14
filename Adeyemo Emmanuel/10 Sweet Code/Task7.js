function TwoArrays(firstArray, secondArray) {
	let counter = secondArray.length;
	let newOption = firstArray.length + secondArray.length;
	let newArray = [newOption.length];
for (let rows = 0; rows < firstArray.length; rows++) {
		newArray[rows] = firstArray[rows];
	}
	for (let rows = 0; rows < secondArray.length; rows++) {
		newArray[counter++] = secondArray[rows];
	}
return newArray;
}

let array = [1,2,3,4,5];
let anotherArray = [6,7,8,9];

console.log(TwoArrays(array, anotherArray))









