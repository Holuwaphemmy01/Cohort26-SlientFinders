function sumEvenNumber(number){

let sum = 0; 

for (let nums = 0; nums < number.length; nums++) {

if (number[nums] % 2 === 0) { 

sum += number[nums]

}
}
return sum
}


const array = [22, 33, 44, 55, 66, 77]
console.log(sumEvenNumber(array))