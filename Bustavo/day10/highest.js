function getHihestndLowestt(array){
	highest = 0
	seconhighest = 0
	array.forEach((element)=>{if(element > highest){seconhighest = highest; highest = element}})
		return [highest,seconhighest]
	}

console.log(getHihestndLowestt([-1,2,-3,7,8,6,5,8,15,19]))