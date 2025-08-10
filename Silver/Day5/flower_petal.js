function is_flower(flower1,flower2){
if(flower1 % 2 == 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 % 2 == 0){
	return true
}else{
	return false
}
}	
let first_pick = 2
let second_pick = 2
console.log(is_flower(first_pick,second_pick))