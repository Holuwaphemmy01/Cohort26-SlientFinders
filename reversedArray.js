function reversedArray(digit, number){

let newList = []
let newList2 = []

for(let index = 0; index <= digit.length - (number+1); index++){
newList.push(digit[index])

}

for (let counter = 0; counter < digit.length; counter++){

if (newList.includes(digit[counter]))continue;
newList2.push(digit[counter])
} 

return newList2.concat(newList)
}

input = [75, 14, 39, 82, 65, 27, 31]

console.log(reversedArray(input, 4))