function getDuplicate(word){

let counter = 0
for(let count = 0; count <= word.length; count++){

for(let index = 0; index <= word.length; index++){

if(word[count].equalsIgnoreCase(word[index])){

counter++

} 

}

}

return counter

}



const prompt = require('prompt-sync')();

let input = prompt("Enter word: ")

console.log(getDuplicate(input))