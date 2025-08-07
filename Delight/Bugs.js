function bugs(invalid){

let priorityNumbers = []

for(let count = 0; count < invalid.length; count++) {

if(invalid[count] >= 1 && invalid[count] < 6) {
priorityNumbers.push(invalid[count])
}
}

return priorityNumbers;

}

result = bugs([1,2,3,4,5,6,7,9])
console.log(result);

