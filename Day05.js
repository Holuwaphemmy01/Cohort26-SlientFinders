function InLove(petals1, petals2){
	if((petals1 % 2 === 0 && petals2 % 2!== 0) || (petals1 % 2 !== 0 && petals2 % 2=== 0)){
	return true;
	} else{
  	return false;
	}

}

console.log(InLove(5, 8));
console.log(InLove(10,14));