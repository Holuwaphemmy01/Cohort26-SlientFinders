function magicNumberGame(number){

const magicNumber = 42
if(number ==  magicNumber ){
console.log("You found the magic number!")
}
else{
console.log("keep looking!")
}
return number
}



const prompt = require('prompt-sync')();

let number = prompt("Enter number: ")
console.log(magicNumberGame(number))