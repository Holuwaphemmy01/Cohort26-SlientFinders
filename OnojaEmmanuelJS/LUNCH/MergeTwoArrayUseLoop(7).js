function getArrayLength(array1, array2){

const array3 = [];

	for (let index = 0; index < array1.length; index++){
		if(!array3.includes(array1[index])){
		array3.push(array1[index])}
		}
	for (let index = 0; index < array2.length; index++){
		if(!array3.includes(array2[index])){	
		array3.push(array2[index])	}
		}
	
return array3;
}
	
	
let array1 = [2,3,4,5,6,7,8,9,76,];
let array2 = [7,88,92,2,3,4,6,7,5,65,4,43,3,9,]
let result = getArrayLength(array1, array2);
console.log(result);



