const person = {
			 firstname : "feyi",
			lastName :  "Onoja",
			age : 92,
			nationality : "Togo"
 }
for (const word in person) {
	if (word === "age"){
		console.log(`${word}: ${person[word]}`);
	}
}





