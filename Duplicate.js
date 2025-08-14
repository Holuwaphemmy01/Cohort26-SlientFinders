function Duplicate(number) {
	let count = 0
	for( let counter = 0; counter < number.length; counter++) {
		for( let index = counter; index < number.length; index++) {
			if( number[counter] == number[index]) {
			count = number[index]
		}
	}
}
return count
}
let input= [1, 2, 3, 4, 5, 5]
console.log(Duplicate(input))