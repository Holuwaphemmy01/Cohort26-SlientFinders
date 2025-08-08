function checkBugs(userEntries){
	let newArray = [];
	for(let entries = 0; entries < userEntries.length; entries++){
	if(userEntries[entries] >= 1 && userEntries[entries] < 6){
		newArray.push(userEntries[entries])
	}
		}
	return newArray;
	} 

	let number = [5,7,0,0,6,6,9,2,7]
	console.log(checkBugs(number))