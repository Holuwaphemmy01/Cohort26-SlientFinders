function guessNumber(number){

const secret = 8

if(number == secret ){
console.log("Correct!")
}
else{
console.log("Try again!")

}

return number
}



const prompt = require('prompt-sync')();

let digit = prompt("Enter number: ")
console.log(guessNumber(digit))
