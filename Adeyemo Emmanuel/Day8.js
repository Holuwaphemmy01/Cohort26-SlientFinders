function countAlphabet(sentence) {
let letter = sentence.toUpperCase;
let total = 0;
for (count = 0; count < sentence.length; count++) {
	for (counter = count; counter < sentence.length; counter++) {
		if (count == counter) {
				total++;
				}
		}
	}

return counter;
}

let name = 'nigga with attitude';

console.log(countAlphabet(name));