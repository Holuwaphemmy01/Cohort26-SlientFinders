count = 0
console.log("What is the capital of france?")
console.log('Options: 1. Paris 2. London 3. Berlin 4. Rome')
let answer = 1
if (answer == 1){
	console.log('Your answer is ' + answer)
	console.log('Correct answer!')
	count ++
} else {
	console.log('Your answer is ' + answer)
	console.log('Wrong answer')
	}
console.log(' ')
console.log('Which planet is known as the Red planet')
console.log('Options: 1. Earth 2. Mars 3. Jupiter 4. Saturn')
let answer1 = 2
if(answer1 == 2){
	console.log('Your answer is ' + answer1)
	console.log('Correct answer!')
	count++
} else {
	console.log('Your answer is ' + answer1)
	console.log('Wrong answer')
	}
console.log(' ')
console.log('Where is Semicolon located in lagos?')
console.log('Options: 1. Ojota 2. Lekki 3. Jibowu 4. Sabo')
let answer2 = 2
if(answer2 == 4){
	console.log('Your answer is ' + answer2)
	console.log('Correct answer!')
	count ++
}else{
	console.log('Your answer is ' + answer2)
	console.log('Wrong answer')
	}
console.log('You scored ' + count + ' out of 3')