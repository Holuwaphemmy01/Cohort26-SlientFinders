function getElementOccurenceCountOf(arrayOfItems){
	let count = {};
	for(let index = 0; index < arrayOfItems.length; index++){
		let element = arrayOfItems[index];
		if (count[element]){
			count[element]++;
		}else{
			count[element] = 1;
		}
	}
	return count;
}
	


let ages = [5, 6, 5, 8, 9, 4];
console.log(getElementOccurenceCountOf(ages));
















