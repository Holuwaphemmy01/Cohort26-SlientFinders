function generateCapitalizations(word) {
	let result = [];
	let wordLength = word.length;
	let finalWord = Math.pow(2, wordLength);

	for (let index = 0; index < finalWord; index++) {
	let slicedWord = word.slice();
	
	for (let pickWord = 0; pickWord < wordLength; pickWord++) {
		if ((index & (1 << pickWord)) !== 0) {
			slicedWord[pickWord] = slicedWord[pickWord].toUpperCase();
      
      				}
    
   				 }
    
   			 result.push(slicedWord);
  
  					}

				  return result;

						}

let alphabet = ['a', 'b', 'c'];
console.log(generateCapitalizations(alphabet));