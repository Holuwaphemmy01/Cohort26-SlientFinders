function arrangeInDescendingOrderOf(positiveInteger){
	let digits = String(positiveInteger).split('')
	let sortedDigits = digits.sort((a, b) => b - a).join('')
	let sortedNumber = Number(sortedDigits)
	return sortedNumber
	}






number = 42145
console.log(arrangeInDescendingOrderOf(number))


















