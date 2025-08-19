const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let presentQuestion = 1;
let correct = 0
let incorrect = 0


function askQuestion() {
  switch (presentQuestion) {
    case 1:
      console.log(`
A. Which tech giant recently reached a $4 trillion valuation?
  1. Apple
  2. Google
  3. Microsoft
  4. Amazon
`);
      rl.question("Your answer: ", (answer) => {
        if (parseInt(answer) === 3) {
          console.log(" Correct!. Move to the next");
          correct += 1;
        } else {
        	incorrect += 1;
          console.log(" Incorrect. Move to the next");
        }
        presentQuestion++;
        askQuestion();
      });
      break;

    case 2:
      console.log(`
2. Which company won a $10 billion U.S. government contract for data analytics?
  1. IBM
  2. Palantir
  3. Oracle
  4. Cisco
`);
      rl.question("Your answer: ", (answer) => {
        if (parseInt(answer) === 2) {
        correct += 1
          console.log(" Correct!.  Move to the next");
        } else {
        	incorrect += 1
          console.log(" Incorrect. Move to the next");
        }
       presentQuestion++;
        askQuestion();
      });
      break;

    case 3:
      console.log(`
3. What is the main reason for the Nasdaq’s recent all-time high?
  1. Oil prices
  2. AI boom
  3. Crypto rally
  4. Housing market
`);
	
		
      rl.question("Your answer: ", (answer) => {
        if (parseInt(answer) === 2) {
        correct +=1
          console.log(" Correct!.  Move to the next");
        } else {
         incorrect += 1
          console.log(" Incorrect.  Move to the next");
        }
       presentQuestion++;
        askQuestion();
      });
      break;

    case 4:
      console.log(`
4. When is the nomination deadline for the TechRadar Choice Awards 2025?
  1. August 10
  2. August 15
  3. August 22
  4. August 31
`);
      rl.question("Your answer: ", (answer) => {
        if (parseInt(answer) === 3) {
        correct += 1
          console.log("Correct!.  Move to the next");
        } else {
        	incorrect += 1
          console.log(" Incorrect.  Move to the next");
        }
        presentQuestion++;
        askQuestion();
      });
      break;

    case 5:
      console.log(`
5. Which African city was ranked the top emerging tech hub in 2025?
  1. Nairobi
  2. Accra
  3. Johannesburg
  4. Lagos
`);

      rl.question("Your answer: ", (answer) => {
        if (parseInt(answer) === 4) {
         correct += 1 
          console.log("Correct!.  Move to the next");
        } else {
         incorrect += 1
          console.log(" Incorrect. Move to the next");
        }
        console.log(`\n Quiz complete. you  got  ${correct} out of 5 `);
        rl.close();
      });
      break;
    default: console.log(" invalid input");
    

  }
}