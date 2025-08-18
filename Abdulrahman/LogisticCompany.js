function toFilterNullUndefined(array){
let newArray = [];
	for(let count = 0; count < array.length; count++){
		let number = array[count];
	if(number != null || number != undefined){
		newArray.push(number);
}		

}
return newArray
}


let array = ["24-23", null, undefined, "24- 34", "34-45", null, undefined, "89-89", "7832"];
console.log(toFilterNullUndefined(array));