function toReverseAtParticularIndex(array, digit){
	let toSlice = array.length - digit;
	let slice = array.slice(toSlice).reverse(array);
	let join = slice.concat(array);
	return (join);
	}
let array = [2,3,4,5,6,7,8,9,7, 6, 9, 34, 21,9];
let digit = 0
let result =  toReverseAtParticularIndex(array, digit);
console.log(result);





