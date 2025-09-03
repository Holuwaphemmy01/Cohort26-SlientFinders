function getNumbers(number){

let arithmetic = []

let sum = 0
for (let count = 0; count < number.length; count++){
	sum += number[count]

}


arithmetic.push(sum)

for(let count = 0; count < number.length;count++){

arithmetic.push(arithmetic[count] - number[count])

	

	}	
return arithmetic
}

let input = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
console.log(getNumbers(input))