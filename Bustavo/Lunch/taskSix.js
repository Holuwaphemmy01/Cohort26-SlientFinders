function createobject(array){
	for(let count = 0; count < array.length;count++){
			fname = array[count] 
		array[count] = {fname: array[count].length}

		}
	return array
	}
array = ["red","Yellow","Blue"]
console.log(createobject(array))