function getNumber(num){
	root = Math.sqrt(num)
	returnValue = 0
	if(Number.isInteger(root)){
		 returnValue = Math.pow(root+1,2)

	}
		else returnValue = -1
		
	return returnValue

	}

console.log(getNumber(169))



