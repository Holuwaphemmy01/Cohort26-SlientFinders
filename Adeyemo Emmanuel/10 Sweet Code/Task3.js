function getTheLength(number) {
	let newArray = [];

for (let count = 0; count < number.length; count++) {
	newArray.push( number[count].length)

}
return newArray;
}

let names = ["goat", "cat", "dog","makaveli"];

console.log(getTheLength(names));