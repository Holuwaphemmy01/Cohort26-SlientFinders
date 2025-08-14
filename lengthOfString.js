function lengthOfString(input) {
	let array = []
	for(let count = 0; count < input.length; count++) {
		array = input[count].length
		}
return array
}

let data = ["Ada", "Shola", "Titi"]
console.log(lengthOfString(data))