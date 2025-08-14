function largestAndLowest(numbers) {
	let number = numbers.join(" ");
console.log(number);
	let largest = Math.max(...number);
console.log(largest);
	let smallest = Math.min(...number);
console.log(smallest);

return [largest,smallest];
	}

let list = ["1 3 5 7 22 44 11"];
console.log(largestAndLowest(list));