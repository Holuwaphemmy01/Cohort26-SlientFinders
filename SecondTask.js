function announcePetName(petType) {
const prompt = require('prompt-sync')()

let pickPetName = prompt('Enter Pet: ')
	if(pickPetName.trim().toLowerCase() === "dog"){

	console.log("Woof! Dogs are awesome!");

	} else {  
	
	console.log("Cool choice, but I love dogs");

	} 


}
announcePetName();


