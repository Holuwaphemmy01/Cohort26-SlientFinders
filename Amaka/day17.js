function repeatEachCharacter(groupOfWords){
	let line = ""
	for(let index = 0; index < groupOfWords.length; index++){
		for(let times = 0; times <= 1; times++){
			line = line + groupOfWords[index];
		}	
	
	

	}
	return line
}



let sentence = "Hello World";
console.log(repeatEachCharacter(sentence));






