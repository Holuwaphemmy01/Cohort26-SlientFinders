const readline = require('readline');

const readLineI = readline.createInterface({ input: process.stdin,  output: process.stdout });

console.log("All of this options show current cohorts in Semicolon, except ?");
console.log("(1). Cohort-27   (2). Cohort-25   (3). Cohort-21   (4). Cohort-23 ");

readLineI.question("Select an option from (1 - 4): ", (input) => {let answer = Number(input);
if (answer == 3){
console.log("Correct!!! Cohort-22 is not a current cohort.");
} 
else if (answer == 1 || answer == 2 || answer == 4){
console.log("Incorrect !!X!! Cohort-21 is not a current cohort.");
}
else {
console.log("Invalid input !!!. Please select an option from the given options");
}

});