/*Day 23: BreakFast
Input => [1, 2, 3, 4, 5, 6].
Output => [21, 20, 18, 15, 11, 6, 0].
Input => [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
Ouput => [10037855, 9293730, 9292795, 9292388, 9291934, 9291504,
9291414, 9291270, 2581057, 2580168, 2579358, 0]*/


function getLogicDay23(digit){
	let summation = [];
	let sum = 0;

	for(let count = 0; count < digit.length; count++){
		sum += digit[count];
		}
		summation.push(sum);
	
	for(let counter = 0; counter < digit.length; counter++){
		sum -=  digit[counter];
		summation.push(sum);	
	}
		return summation;
	}

let digit1 =  [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358];
let result = getLogicDay23(digit1);
console.log(result);

