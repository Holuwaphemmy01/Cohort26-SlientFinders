const prompt = require('prompt-sync')()
const q1 = prompt("What Is The Capital Of France?\n options:\n 1.Paris \n 2.London \n 3. Berlin \n 4. Abuja")
let score = 0
let totalScore = 0
	
	switch(q1){
		case '1' : 
			console.log("Correct");
			score++;
			totalScore++
			
		break;
		default:
			console.log("Incorrect");
			totalScore++
		
		}

const q2 = prompt("What Is the Capital of Austria?\n options:\n 1. Abuja\n 2. Trukey  \n 3.Austarllia \n 4. Austria")
	switch(q2){
		case '4' : 
			console.log("Correct");
			score++;
			totalScore++
			
		break;
		default:
			console.log("Incorrect");
			totalScore++
		
		}

const q3 = prompt("What Is President Of Nigeria?\n options:\n 1. Biden\n 2. Tinubu  \n 3. Femi \n 4.Trump")
	switch(q3){
		case '2' : 
			console.log("Correct");
			score++;
			totalScore++
			
		break;
		default:
			console.log("Incorrect");
			totalScore++
		
		}
const q4 = prompt("What Is the Female Lion Called?\n options:\n 1. Lioness\n 2. cub  \n 3. Tigress \n 4.Leopardess")
	switch(q4){
		case '1' : 
			console.log("Correct");
			score++;
			totalScore++
			
		break;
		default:
			console.log("Incorrect");
			totalScore++
		
		}
const q5 = prompt("What Is the the tallest Mountain?\n options:\n 1. Semicolon\n 2. Mount Everest  \n 3.Mount khaf \n 4.Olumo Rock")
	switch(q5){
		case '2' : 
			console.log("Correct");
			score++;
			totalScore++
			
		break;
		default:
			console.log("Incorrect");
			totalScore++
		
		}

console.log(`You Scored ${score} out of ${totalScore}`)
