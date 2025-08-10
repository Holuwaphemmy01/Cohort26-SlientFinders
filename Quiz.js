let count = 0;
let stop = 0;
do{
let userInput = Number(prompt(

 "Who is the president of Nigeria?\n\n" +
"(1) Bola Ahmed Tinubu. (2) Muhamed Tinubu. (3) Peter Obi"
));
stop++
if (userInput == 1){
console.log("Corret!");
count++
}else{
 console.log("incorret!");
}

userInput = Number(prompt(

"Which planet is known as the 'Red Planet'?\n\n" +
"(1) Earth (2) Jupiter (3) Mars" 
));
stop++
if (userInput == 3){
console.log("Correct!!");
count++
}else{
console.log("Incorrect!!");
}

userInput = Number(prompt(

"Who painted the famous artwork 'The Starry Night'?\n\n" +
"(1) Van dal Viger (2) lawandowski Lewin dr (3) Vincent van Gogh"
));
stop++
if (userInput == 3){
console.log("Correct!!");
count++
}else{
console.log("Incorrect!!");
}

userInput = Number(prompt( 

"What is the chemical symbol for gold?\n\n" +
"(1) Gd (2) Au (3) Auu"
));
stop++
if (userInput == 2){
console.log("correct!!");
count++
}else{
console.log("Incorrect");
}

userInput = Number(prompt(

"Which musician is known as the 'King of Rock and Roll'?\n\n" +
"(1) Eminem (2) pop Smoke (3) Elvis Presley"
));
stop++
if (userInput === 3){
console.log("Correct!!");
count++
}else{
console.log("Incorrect");
}
}while (stop != 5);
console.log("Your Scored " + count + "out of " + 5); 





















 