function getLengthOf(arrayOfStrings){
	let newArray = [];
	for (let eachWord = 0; eachWord < arrayOfStrings.length; eachWord++) {
		newArray.push(arrayOfStrings[eachWord].length);
	}
	return newArray;
}

let words = ["feyi", "basit", "Amaka", "Emma"];			
console.log(getLengthOf(words));
	















