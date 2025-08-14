
let newArray = []
for(let count = array.length-1, counter = 1; counter <= number; count--, count++){

newArray.push(array[count])

}



let index = array.length - number;
for (let count = 0; count < index; count++){
	newArray.push(array[count]);

}

return newArray

}