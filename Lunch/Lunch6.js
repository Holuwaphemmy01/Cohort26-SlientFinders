function getLengthOf(arrayOfStrings){
	let newArray = [];
	let eachWord;
	let object1 = {};
	for (eachWord = 0; eachWord < arrayOfStrings.length; eachWord++) {
		newArray.push(arrayOfStrings[eachWord].length);
			
		object1[arrayOfStrings[eachWord]] = newArray[eachWord];
	}
	return object1;

		
}
const colors = ["red", "green", "blue"];
console.log(getLengthOf(colors));



