const prompt = require('prompt-sync')()
function multiplicationTable(multiply) {

let multiplyNumber = parseInt(prompt('Enter Number: '));

for(let index = 1; index <= 12; index++){

        let multiply = index * multiplyNumber;
	
	console.log(multiplyNumber + " * " + index + " = " + multiply);
    }
	

}

multiplicationTable();








