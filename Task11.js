function decideNumber(number){

if(number > 0){
console.log("positive!")
}
	else{
console.log("Negative!")
}

}


const prompt = require('prompt-sync')();

let number = prompt("Enter number:> ")
console.log(decideNumber(number))