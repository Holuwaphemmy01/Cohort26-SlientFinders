function getProductOf(array1, array2){
	for(let index = 0; index < array2.length; index++){
		if(array1.includes(array2[index])) continue;			
		array1.push(array2[index]);
	}
	return array1;
}



let ages = [4, 6, 7, 8, 9];
let scores = [3, 5, 11, 10, 12];
console.log(getProductOf(ages, scores));











