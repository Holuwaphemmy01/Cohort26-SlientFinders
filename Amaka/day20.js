


function getInitialsOf(sentence){
	let initials = sentence.charAt(0);
	initials += '.';
	initials += sentence.charAt((sentence.indexOf(" ") + 1));
	return initials;
}

console.log(getInitialsOf("Sam Harris"));



