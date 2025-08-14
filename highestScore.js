function highestScore(number) { 
	let highest = 0
	for(let value in number) {
		for(let index in value) {
			if(value.Score > highest) {
				highest = value.Score
			}
		}
	}
return highest
}
let data = [ 
{Name: "Feyi", Score: 99}, 
{Name: "Ade", Score: 77}, 
{Name: "Hassan", Score: 89} 
]
console.log(highestScore(data))