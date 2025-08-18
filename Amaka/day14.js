function getStringsOf(arrayOfNumbers){
	let stringOfNumbers = arrayOfNumbers.join("");
	let slicedStringOfNumbers = stringOfNumbers.slice(0, 3);
	let slicedStringOfNumbers1 = stringOfNumbers.slice(3, 6);
	return `(${slicedStringOfNumbers})${slicedStringOfNumbers1}-${stringOfNumbers.slice(6,)}`;
}

let ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(getStringsOf(ages))