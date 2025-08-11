function countDistinctCharactersOf(characters){
	let count = 0;
	for(let eachLetter = 0; eachLetter < characters.length; eachLetter++){
		for(let index = eachLetter + 1; index < characters.length ; index++){
			if(characters[eachLetter].toLowerCase() === characters[index].toLowerCase())
				count++;
		} 
	}
	return count; 
		
		
		
}

let password = "a11BAcb";
console.log(countDistinctCharactersOf(password));



















