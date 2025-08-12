function favouriteNumber(selectNumber) {
const prompt = require('prompt-sync')()


const favouriteNumber = 7;

 for(let count = 0; count <= 10; count++){


      let guessNumber = parseInt(prompt('Enter Guess Number: '));
      if (guessNumber == favouriteNumber) {

	console.log("That is my favorite number!");
	
       } else{

        console.log("Nice try, guess again!");

	      }



   }
}

favouriteNumber();















