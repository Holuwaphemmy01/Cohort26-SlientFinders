function toGetTheTwoLargestNumbers(number){
largest = 0;
secondLargest = 0
for(let index = 0; index < number.length; index++){
	let digit = number[index]
	if( digit > largest){
		secondLargest = largest;
		largest = digit;
		}
	if(digit > secondLargest && digit < largest && digit != largest){
	console.log(digit);
	secondLargest = digit
	
	
	}
}

return [secondLargest, largest]
}


let number = [3,5,6,7,8,5,3]
let result = toGetTheTwoLargestNumbers(number);
console.log(result);