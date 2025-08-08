function loveChecker(num1OfPetal, num2OfPetal){

if (num1OfPetal % 2 == 0 && num2OfPetal % 2 != 0){
return true;
}else
if (num2OfPetal % 2 == 0 && num1OfPetal % 2 != 0){
return true;
}
return false;
}

let num = loveChecker(2,3);

console.log(num);