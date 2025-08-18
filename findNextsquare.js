function findNextSquare(number){

const square = Math.sqrt(number);
 
const num = square + 1;

if (square % 1 != 0){

return -1
}else{

return num * num 
}
}

number = 114

console.log(findNextSquare(number) )