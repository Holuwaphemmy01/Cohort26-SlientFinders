function createobject(array){
	  	newObject = {}
	for(let count = 0; count < array.length;count++){
		newObject[array[count]] = array[count].length;
		
		}
	return newObject
	}


array = ["red","Yellow","Blue"]
console.log(createobject(array))


	