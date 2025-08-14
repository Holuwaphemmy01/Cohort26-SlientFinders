function arrayOfStrings(input){

let counter = 0
let newString = []

for (let index = 0; index <= input.length; index++){


for(let count = 0; count <= input[index].length; count++){

counter += 1

}
newString.push(counter)
}

return newString
}



let input = ["mike", "mayor", "main"]
console.log(arrayOfStrings(input))
