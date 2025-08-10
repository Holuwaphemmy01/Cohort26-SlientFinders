const readline = require('readline');

const readLineI = readline.createInterface({ input: process.stdin,  output: process.stdout });

console.log("Welcom to QuizMe game, play Responsibly ['_']");

let myQuestionArray =[`Question 1. All of this options show current cohorts in Semicolon, except ?
(1). Cohort-27   (2). Cohort-25   (3). Cohort-21   (4). Cohort-23 ` ,
 `Question 2. The following religions exist except ?
(1). Christian   (2). Islam   (3). Budha   (4). Witchcraft ` , 
`Question 3. The following are programming languages except ?
(1). Java   (2). Algorithm   (3). Java script   (4). Python `];
let correctAnswers = [3, 4, 2];
let correctAnswersTotal = 0;
let wrongAnswersTotal = 0;
let question = 0;

function quizQuestion() {
if (question < myQuestionArray.length) {
console.log(myQuestionArray[question]);
readLineI.question("Select an option from (1 - 4): ", (input) => {let answer = Number(input);

if (answer >= 1 && answer <= 4) {
if (answer == correctAnswers[question]) {
console.log("Correct!!\/!!.. ");
correctAnswersTotal++;
} 
else {
console.log("Incorrect !!X!! ");
wrongAnswersTotal++ ;
}
}
else {
console.log("Invalid input !!!. Come back when youre smarter.");
}
question++;
quizQuestion();
});

}
else {
console.log("Quiz Completed!!!");
console.log("Total Correct answers: ", correctAnswersTotal);
console.log("Total Wrong answers: ", wrongAnswersTotal);
readLineI.close();
}
}

quizQuestion(); 

