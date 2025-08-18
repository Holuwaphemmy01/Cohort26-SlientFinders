function findNextSquare(number){
let square = Math.sqrt(number);
if (square % 1 !== 0){
	return -1;
}

let newSquare = square + 1;
return newSquare * newSquare
}




numberone = 114;
console.log(findNextSquare(numberone))