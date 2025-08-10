function isGuessingGame(quest1){
	const option  = `
		
A. Which tech giant recently reached a $4 trillion valuation?
	1. Apple	
	2. Google
	3. Microsoft
	4. Amazon
	5. Next
	6. Exit

	`;
	

//✅ Answer: C) Microsoft
console.log(option);
	switch(quest1){
	case 1: console.log("incorrect isGuessingGame2(quest1)"); break;
	case 2: console.log("2 Is incorrect, \n move to the next question" ); break;
	case 3: console.log("3 Is correct, \n move to the next question" ); break;
	case 4: console.log("4 Is incorrect, \n move to the next question" ); break;
	case 5: isGuessingGame(quest1); break
	case 6 :
		default : console.log(" Not a correct input" ); 
	}
return option;
}

console.log( isGuessingGame(5));









//2

function isGuessingGame2(quest1){
	const option  = `
		
B. Which company won a $10 billion U.S. government contract for data analytics?
	1) IBM
	2) Palantir
	3) Oracle
	4) Cisco


	`;
	

//✅ Answer: B) Palantir
console.log(option);
	switch(quest1){
	case 1: console.log("1  Is incorrect, \n move to the next question"); break;
	case 2: console.log("2 Is correct, \n move to the next question" ); break;
	case 3: console.log("3 Is incorrect, \n move to the next question" ); break;
	case 4: console.log("4 Is incorrect, \n move to the next question" ); break;
		default : console.log(" Not a correct input" ); 
	}
return option;
}

//console.log( isGuessingGame2(4));


//3
function isGuessingGame3(quest3){
	const option  = `
		
3. What is the main reason for the Nasdaq’s recent all-time high?
	A) Oil prices
	B) AI boom
	C) Crypto rally
	D) Housing market

	`;
	

//✅ Answer: B) AI boom
console.log(option);
	switch(quest3){
	case 1: console.log("1  Is incorrect, \n move to the next question"); break;
	case 2: console.log("2 Is correct, \n move to the next question" ); break;
	case 3: console.log("3 Is incorrect, \n move to the next question" ); break;
	case 4: console.log("4 Is incorrect, \n move to the next question" ); break;
		default : console.log(" Not a correct input" ); 
	}
return option;
}

//console.log( isGuessingGame3(4));



//4
function isGuessingGame4(quest1){
	const option  = `
		
4. When is the nomination deadline for the TechRadar Choice Awards 2025?
A) August 10
B) August 15
C) August 22
D) August 31



	`;
	

//✅ Answer: C) August 22
console.log(option);
	switch(quest1){
	case 1: console.log("1  Is incorrect, \n move to the next question"); break;
	case 2: console.log("2 Is incorrect, \n move to the next question" ); break;
	case 3: console.log("3 Is correct, \n move to the next question" ); break;
	case 4: console.log("4 Is incorrect, \n move to the next question" ); break;
		default : console.log(" Not a correct input" ); 
	}
return option;
}

//console.log( isGuessingGame4(3));



//5

function isGuessingGame5(quest5){
	const option5 = `
		
5. Which African city was ranked the top emerging tech hub in 2025?
A) Nairobi
B) Accra
C) Johannesburg
D) Lagos

		`;

//✅ Answer: D) Lagos
console.log(option5);
	switch(quest5){
	case 1: console.log("1  Is incorrect, \n move to the next question" ); break;
	case 2: console.log("2 Is incorrect, \n move to the next question" ); break;
	case 3: console.log("3 Is incorrect, \n move to the next question" ); break;
	case 4: console.log("4 Is correct, \n move to the next question" ); break;
		default : console.log(" Not a correct input" ); 
	}
return option5;
}

//console.log(isGuessingGame5(3));