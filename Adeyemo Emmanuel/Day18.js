function changeNumberPosition(number){
	let newArray = [];
	for(let count = 0; count < number.length; count++){
		newArray.push(number[count] * - 1);
}
return newArray;
}
let array = [-2,-3,-4,-5,-6,-7,-8]
console.log(changeNumberPosition(array));