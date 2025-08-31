/**function getInitialsOf(sentence){
	let initials = sentence.charAt(0);
	initials += '.';
	initials += sentence.charAt((sentence.indexOf(" ") + 1));
	return initials;
}

**/


function getInitialsOf(sentence){
	let array  = sentence.split(" ");
	let initials = "";
	for(let index = 0; index < array.length; index++){
		initials += array[index].charAt(0).toUpperCase();
		if (index == array.length - 1)
			break;
		initials += ".";
	}
		
		
		
	return initials;
}

console.log(getInitialsOf("Sam Harris"));
console.log(getInitialsOf("Sam Harris Enugu"));
console.log(getInitialsOf("peter kingsley"));


