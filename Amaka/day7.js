function reverseEachWordIn(sentence){
	let arraySentence = sentence.split(" ");
	for(word = 0; word < arraySentence.length; word++){
		let eachWord = arraySentence[word].split('').reverse().join(''); 
	}
	return eachWord;
	
	//return arraySentence;
	
}


let comment = "This is an example!";
console.log(reverseEachWordIn(comment));
