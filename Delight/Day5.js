function loveFlower(firstnumber, secondnumber){

if(firstnumber % 2 == 0 && secondnumber % 2 != 0 ) {
return true;
}
if(firstnumber % 2 != 0 && secondnumber % 2 == 0){
return true;
} else {
return false
}
}  



result = loveFlower(7,7)
console.log(result)
 