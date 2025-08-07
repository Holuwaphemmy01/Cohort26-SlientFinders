function arrayCleaning(List){
		let trackingList = [];
		for (index = 0; index < List.length; index++){
		if (List[index] >= 1 && List[index] < 6){
			trackingList.push(List[index]);	
		}
 	 }
	return trackingList;
}
	const list =  [0,1,2,3,4,5,6,7];
	let result = arrayCleaning(list);
	console.log(result);