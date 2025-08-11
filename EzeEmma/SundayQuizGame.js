const prompt = require("prompt-sync")();

const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Rome"],
    answer: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 2
  },
  {
    question: "Who wrote 'Hamlet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: 2
  }
];

let score = 0;

console.log("=== Welcome to the Quiz Game! ===\n");

quizData.forEach((q, index) => {
  console.log(`${index + 1}. ${q.question}`);
  q.choices.forEach((choice, i) => {
    console.log(`   ${i + 1}. ${choice}`);
  });

  const userAnswer = parseInt(prompt("Your answer (number): "));

  if (userAnswer === q.answer) {
    console.log("Correct!\n");
    score++;
  } else {
    console.log(`Wrong! The correct answer is: ${q.choices[q.answer - 1]}\n`);
  }
});

console.log(`Game Over! You scored ${score} out of ${quizData.length}.`);
