function removeEmptyDataIn(arrayOfCoordinates){
	let realData = [];
	for(let element = 0; element < arrayOfCoordinates.length; element++ ){
		if (arrayOfCoordinates[element] == null || arrayOfCoordinates[element] == undefined)
			arrayOfCoordinates.splice(element)
			//realData.push(arrayOfCoordinates[element]);
			
	}
	return arrayOfCoordinates;

}


let result = ["23-45", undefined, null, "24-75-82"];
console.log(removeEmptyDataIn(result));














