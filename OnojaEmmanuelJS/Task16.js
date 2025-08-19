function lengthOfTheArray(digit){
	let newArray = [];
	for(let count = digit; count >= 1; count--){
	newArray.push(count)
	
	}
	return newArray;

}

let number = 15;
let result =  lengthOfTheArray(number);
console.log(result);