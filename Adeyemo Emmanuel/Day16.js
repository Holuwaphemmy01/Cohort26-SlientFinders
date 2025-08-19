function countDown(number) {
let newArray = [];
for(let count = number; count >=1; count--) {
	newArray.push(count);
}
return newArray;
}


console.log(countDown(5));