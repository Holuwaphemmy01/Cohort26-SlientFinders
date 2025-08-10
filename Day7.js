function reverseString(sentence){

	let splitted = sentence.split(" ")
	let reversed = splitted.reverse()
	let joined = reversed.join(" ")	
	
return joined
}


let input = "This is an example"

console.log(reverseString(input))