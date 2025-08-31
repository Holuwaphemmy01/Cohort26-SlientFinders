function accum(string) {
	let array = string.split("");
	let modifiedArray = [];
	for (let index = 0; index < array.length; index++){
  		let letter = array[index].toUpperCase();
  		for(let index1 = index ; index1 > 0; index1--){
  			letter += array[index].toLowerCase();
  		}
  		modifiedArray.push(letter)
  	}
  return modifiedArray.join("-");
}
  
  
console.log(accum("abcd"));
console.log(accum("RqaEzty"));


console.log(accum("cwAt"));


