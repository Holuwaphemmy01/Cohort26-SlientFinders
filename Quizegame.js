const prompt = require('prompt-sync')(); 


const interview = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: 1 
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "9", "7"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 2
    }
];

let score = 0; 

for (let i = 0; i < questions.length; i++) {
    console.log(`\n${questions[i].question}`);
    
    
    for (let j = 0; j < questions[i].options.length; j++) {
        console.log(`${j + 1}. ${questions[i].options[j]}`);
    }
    
  
 