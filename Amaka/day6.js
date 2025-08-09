function getAllPermutationOf(aString){
	let aArray = [];
	let result;
	for (let value = 0; value < aString.length; value++){
		result = aString[value].toUpperCase() + aString.slice(1, 3);
		aArray.push(result);
		//console.log(result);
	}
	return aArray;
}
let name = "abc";
console.log(getAllPermutationOf(name))






















