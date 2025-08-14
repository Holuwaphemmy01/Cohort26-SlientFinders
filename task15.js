function guessAnimal(animal){

let myAnimal = "dog"

if(animal === "dog"){
console.log("Correct! it's a dog!")
}
else{
console.log("Nope, it's a dog!")
}
return animal
}


const prompt = require('prompt-sync')();

let animal = prompt("Guess Animal:> ")
console.log(guessAnimal(animal))