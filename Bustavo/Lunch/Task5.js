function getHighest(array){
		let highest = 0
		let highestInfo 
	for(let studentInfo = 0; studentInfo < array.length;studentInfo++){
		for (students in array[studentInfo]){
			if(students == "score")
				if(array[studentInfo].score > highest) highest = array[studentInfo].score
			}
			if(array[studentInfo].score == highest) highestInfo  = array[studentInfo]
		}		

	return highestInfo 
}






const studentsInfo = [

			{

			name : "Egberongbe Abdulbasit",
			score : 90,
			},
			{

			name : "Farid",
			score : 10,
			},

			{

			name : "Lewis",
			score : 20,
			},

			{

			name : "Ade",
			score : 100,
			},

			{

			name : "yemisi",
			score : 200,
			},


		]

 console.log(getHighest(studentsInfo))
