function perfectSquare(number) {
	let root = Math.sqrt(number)
	if (root % 1 != 0) {
		return - 1;
	
	}
	let nextRoot = root + 1;
	return nextRoot * nextRoot

}

console.log(perfectSquare(121));
console.log(perfectSquare(114));