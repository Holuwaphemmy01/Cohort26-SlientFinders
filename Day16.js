function returnArray(digit){
let number = [];

for(let count = digit; count > 0; count--){

	number.push(count);

	} 
return number;

}


input = 20;

console.log(returnArray(input));