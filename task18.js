function printName(name){

for(let count = 1; count <= 3; count++){

console.log(name)

}

}


const prompt = require('prompt-sync')();
let name = prompt("Enter name: > ")

console.log(printName(name))