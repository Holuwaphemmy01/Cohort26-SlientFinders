/*Given an array, move all 0s to the end while maintaining the relative order of
the non-zero elements.
Example:
Input => [0, 1, 0, 3, 12].
Output => [1, 3, 12, 0, 0]
Input => [4, 0, 5, 0, 0, 3, 0, 1]
Ouput => [4, 5, 3, 1, 0, 0, 0, 0]
*/


function arrangeArray(digit){
let array = []
let zero = 0;


	for(let counter = 0; counter < digit.length; counter++){
		if(digit[counter] !== 0){
			//array.push(digit[counter]);
			array[zero++] = digit[counter];
			}
		}
	while (zero < digit.length){
	array[zero++] = 0;
	}	
return array.join();

}


let digit1 =  [0, 1, 0, 3, 12];
let digit2 =  [4, 0, 5, 0, 0, 3, 0, 1];
let result = arrangeArray(digit1);
let result2 = arrangeArray(digit2);
console.log(result2);
console.log(result);









