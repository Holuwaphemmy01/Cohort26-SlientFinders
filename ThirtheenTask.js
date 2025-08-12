const prompt = require('prompt-sync')()
function restrictAge(checkAgeRestriction) {


let minimumAge = 10;
let ageNumber = parseInt(prompt('Enter Age: '));

if(ageNumber >= 10){

    console.log("Welcome to the show!");

    }else{

    console.log("Sorry, you’re too young");

	}
}

 restrictAge();






