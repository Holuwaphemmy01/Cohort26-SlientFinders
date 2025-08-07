function priority_numbers(entries){
 let new_array = []
	for(let index = 0; index < entries.length; index++){
		if(entries[index] >= 1 && entries[index] < 6 ){
		new_array.push(entries[index]);
		}	
				}
		return new_array
	}
let numbers = [0,1,2,3,4,5,6,3];
console.log(priority_numbers(numbers));