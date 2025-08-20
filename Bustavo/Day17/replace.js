function getElement(arrayString, count){
		newStr = ""
	for(let index = 0; index <arrayString.length;index++){
		for (let counter = 0; counter < count;counter++){
			newStr+= arrayString.charAt(index)
			}
		}
		return newStr
	}

console.log(getElement("Hello World",2))