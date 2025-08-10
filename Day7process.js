function reverseString(sentence){

	let splitted = sentence.split(" ")
	let reversed = []
		for(let index = 1; index <= sentence.length; index++){

			reversed = splitted[index].reverse()
				
			
		}	
return reversed
	}



let input = "This is an example"

console.log(reverseString(input))