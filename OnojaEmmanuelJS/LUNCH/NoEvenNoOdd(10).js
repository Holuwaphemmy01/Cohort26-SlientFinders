function noOfOddandNoEven(digit){
let even = [];
let odd = [];

	for(let count of digit){
	if(count % 2 !== 0){
	 even.push(count);
	}
	else  odd.push(count);	
	}
	return {even, odd};
}



let numbers = [2,3,4,5,6,7,8,9,8,76,54,3,4,6,7,8,75,3,4,5];
let  result = noOfOddandNoEven(numbers);
console.log(result)