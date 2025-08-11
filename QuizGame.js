const questions = [
	{question: What is 520 + 215 - 139?,
	 options: ["495", "656","536" "596"],
	Answer : 3 },
	{question: Simplify 27 / 54 to its lowest terms.,
	options: ["2/3", "1/3", "1/2", "1/4" ],
	Answer: 2 },
	{question: A square has a side of 9cm. What is the area of the square?,
	options: ["96cm.sq", "87cm.sq", "81cm.sq", "91cm.sq"],
	Answer: 2 },
	{question: Multiply 67 * 9.,
	options: ["603", "606", "703", "606"],
	Answer: 0 },
	{question: A farmer has 450 goats and sheep, 3/5 of them are goats. how 	many sheep does he have?,
	options: ["170", "280", "190", "180" ],
	Answer: 3 },
		];

	let score = 0;

	for(let i = 0; i < questions.length; i++){
		let q = questions[i];
		let optionsText = "";
		for(let j = 0; j < q.options.length;j++){
		optionsText += `${j + 1}. ${q.options[j]}\n`;
	}

	let userAnswer = parseInt(prompt(`${q.question}\n${optionsText}`));

	if(userAnswer === q.answer){
		alert("Correct");
		score++;
		} else{
		alert(`Wrong! The correct answer was ${q.answer}. ${q.options[q.answer - 1]}`);
			}
	
	}

alert(`you scored ${} out of ${questions.length}!`);