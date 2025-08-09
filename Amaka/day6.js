function getAllPermutationOf(aString){
	let aArray = [];
	let result;
	if (aString == aString.toLowerCase())
		aArray.push(aString);
		result = aString.toUpperCase();
		console.log(result);
		aArray.push(result);
	for (let value = 0; value < aString.length; value++){
		console.log(value);
		if (value == 0){
			result = aString[value].toUpperCase() + aString.slice(1, 3);
			aArray.push(result);
			console.log(result);
		}else if (value == 1){
			result = aString.charAt(0) + aString[value].toUpperCase() + aString.slice(2, 3);
			aArray.push(result);
			console.log(result);
		} else if (value == 2){
			result = aString.slice(0, 2) + aString[value].toUpperCase();
			aArray.push(result);
			console.log(result);
		}
	}
	for (let value = 0; value < aString.length; value++){
		console.log(value);
		if (value == 0){
			result = aString[value].toUpperCase() + aString[value + 1].toUpperCase() + aString.slice(-1);
			aArray.push(result);
			console.log(result);
		}else if (value == 1){
			result = aString.charAt(0) + aString[value].toUpperCase() + aString[value + 1].toUpperCase();
			aArray.push(result);
			console.log(result);
		} else if (value == 2){
			result = aString[value - 1].toUpperCase() + aString.charAt(0) + aString[value].toUpperCase();
			aArray.push(result);
			console.log(result);
		}

	}
		return aArray;
}
let name = "abc";
console.log(getAllPermutationOf(name));