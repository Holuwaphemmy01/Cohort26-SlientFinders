function getNumber(number){
		storeNumber = 0
	for(let count = 0; count < number.length;count++){
		for(let counter = 0; counter < number.length;counter++){
			if(number[count] > number[counter]){
				storeNumber =  number[count]
				number[count] = number[counter]
				number[counter] = storeNumber
				
				}

			}
		
			}

		return number.toString()
	}

	console.log(getNumber([1,2,3,4,5,6,7,8,9 ]))	
	
