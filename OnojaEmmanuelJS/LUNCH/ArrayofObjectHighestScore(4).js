let student =[
 {Name : "Onoja " , Age : 10, Gender  : "Male", City : "Spain", score : 90 },
{Name : "Samuel", Age	 : 10, Gender  : "Male", City : "Spain",  score : 60 },
{Name : "John" , Age	 : 10, Gender  : "Male", City : "Spain", score : 70 },
{Name : "Victor" , Age	 : 10, Gender  : "Male", City : "Spain", score : 73 },
]

		let highest = student[0];
		for(let count in student){
		if(student[count].score > highest.score ){
			highest = student[count];
			}
				}
			console.log(highest)		
			