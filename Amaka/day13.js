function findNextSquare(perfectSquare){
	let result = perfectSquare ** 0.5
	if (result % 1 == 0){
		result += 1
		return result * result
	}else{
		return -1
	}
		
}

age = 114
console.log(findNextSquare(age))





