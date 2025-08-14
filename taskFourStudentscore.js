function studentHighestScore(scores){
let largestScore = scores[0].score;
let studentWithHigest = 0;
for (let count = 0; count < scores.length; count++){

  if (scores[count].score > largestScore){ 
     largestScore = scores[count].score;
      studentWithHigest = scores[count].name;
}
}

return studentWithHigest;
}


let studentScores = [{name: "Mike", score: 20},{name: "Emma",score: 40},{name: "Ahmed", score: 101},
{name: "Chima", score: 19}];

console.log("The higest score is: " + studentHighestScore(studentScores));

