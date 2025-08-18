function quiz(question) {
    console.log(question);
}

let question = "What is the capital of France?";

function get_answers(options, choice) {
    let correctCount = 0;
    let incorrectCount = 0;

    console.log("Options:");
    for (let key in options) {
        console.log(`${key}: ${options[key]}`);
    }

    
    if (choice === 1) {
        correctCount++;
        console.log("Correct!");
    } else {
        incorrectCount++;
        console.log("Incorrect!");
    }

    console.log(`Correct: ${correctCount}, Incorrect: ${incorrectCount}`);
}

let options = {
    1: "Paris",
    2: "London",
    3: "Berlin",
    4: "Rome"
};

quiz(question);
get_answers(options, 0);