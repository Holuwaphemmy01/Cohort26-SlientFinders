function getPassword(guess){

const correctPassword = "python"

let attempts = []

for (let tries = 0; tries < 3; tries++) { 

	attempts.push(guess)
 if (guess === correctPassword) {
 console.log("Success!");
        break
 } else if (tries < 2) {
    console.log("Try again!");
 }
 else {
   console.log("Locked out!");
 }
 }
}

const prompt = require('prompt-sync')();

let guess = prompt("Enter Password: ")
console.log(getPassword(guess))
