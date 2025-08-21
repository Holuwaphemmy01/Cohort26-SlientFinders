function duplicateSolution(Word){
		let result = "";
		for(let index = 0; index < Word.length; index++){
		result += Word[index] + Word[index]  	}
		return result;
}




word = "Welcome to SEmicolon"
result = duplicateSolution(word)
console.log(result)





