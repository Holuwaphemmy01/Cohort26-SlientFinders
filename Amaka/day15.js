function getCountOf(arrayOfSheep){
	let count = 0
	for(let index = 0; index < arrayOfSheep.length; index++){
		if(arrayOfSheep[index] === true)
			count++;
		else
			continue;
	}
	return count;s


}

let sheep = [false, true, true, false, true, false, true, false, true, false, false, false, true]
console.log(getCountOf(sheep))
