function getValidityOf(password){
	const capitalLetter = /[A-Z]/g;
	const digits = /[0-9]/g;
	const specialChar = /[!@$%#]/g;
	for(let index = 0; index < password.length; index++){
		if ((password[index].match(capitalLetter)).length >= 1 && (password[index].match(digits)).length >= 1 && (password[index].match(specialChar)).length >= 1)
			return "Strong";
		else
			return "Weak";
	
	}

}

console.log(getValidityOf("Password9!"));

