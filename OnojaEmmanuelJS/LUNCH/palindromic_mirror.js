function mirrorPalindrome(come) {
  const mirrored =  come.slice(0, -1).split('').reverse().join('');
  	return mirrored;
}

console.log(mirrorPalindrome("school")); 