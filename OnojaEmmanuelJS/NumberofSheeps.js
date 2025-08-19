function getSheepCount(sheepCount){
	
		let count = 0
	for(index = 0; index < sheepCount.length; index++){
		if (sheepCount[index] === true){
		count++		
		}
	
	}
	return count;
}

let count =  [true, true, true, false, true, true, true, true ,true, false, true, false, true, false, false, true ,true, true, true, true ,false, false, true, true];
let result = getSheepCount(count);
console.log(result);



