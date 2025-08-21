function reverseNumberSign(digit){
	let answer = digit.map((number)  => number * -1  );
	return answer;
		}

let digit = [1, -2, 3, -4, -5];
let result = reverseNumberSign(digit);
console.log(result);

