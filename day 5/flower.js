function flower(number1 , number2) {
if(number1 % 2 == 0 && number2 % 2 == 1 || number2 % 2 == 0 && number1 % 2 == 1){
return true;
} else {
return false;
}
}
number1 = 7
number2 = 6
console.log(flower(number1 , number2)); 