count = 0
show = `What is the capital of France?`
console.log(show)
console.log("1. Paris 2. London 3. Berlin 4. Rome")
let answer1 = 1
if(answer1 == 1){
	console.log("Your answer is" + answer1)
	console.log("correct answer")
	count++
} else {
	console.log("Your answer is " + answer1)
	console.log("wrong answer")
	}
console.log(" ")
show = `Who is the artist with the biggest fanbase in africa?`
console.log(show)
console.log("1. tems 2. Tyla 3. Wizkid 4. Davido")
let answer2 = 3
if(answer2 == 3){
	console.log("Your answer is " + answer2)
	console.log("correct answer")
	count++
} else {
	console.log("Your answer is " + answer2)
	console.log("wrong answer")
	}

console.log(" ")
show = `Who is the president of united state ?`
console.log(show)
console.log("1. Tinubu  2. Donald Trump 3. Wizkid 4. Davido")
let answer3 = 2
if(answer3 == 2){
	console.log("Your answer is " + answer3)
	console.log("correct answer")
	count++
} else {
	console.log("Your answer is" + answer3)
	console.log("wrong answer")
	}
console.log(count)