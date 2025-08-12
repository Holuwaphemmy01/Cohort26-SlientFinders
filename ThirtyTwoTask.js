const prompt = require('prompt-sync')()
function sumEven(sumEvenNumbers) {

  let sum = 0;
  for(let index = 0; index <= 20; index++){
     
	if(index % 2 === 0){

	sum += index;

	}
	
    }

	console.log("The sum of even numbers is: " + sum);
}
sumEven(); 












