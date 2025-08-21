const getSheep = (array)=>{
	sheepPresent = array.filter((element) => element == true)
	return sheepPresent.length
	}

	sheepArray =  [true,  true,  true,  false,  true,  true,  true,  true ,true,  false, true,false,  true,  false, false, true ,true,  true,  true,  true ,false, false, true,  true]
	console.log(getSheep(sheepArray))	
