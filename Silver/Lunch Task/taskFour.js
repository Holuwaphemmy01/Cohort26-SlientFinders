let students = [{Name : 'Ade',
			Score: 32,
			height: 5},
			{Name: 'Jude',
			Score: 21,
			height: 9},
			{Name: 'David',
			Score: 23,
			height: 98},
			{Name: 'Kate',
			Score:87,
			height: 27}]
highest_studentScore = students[0]
for(const properties in students){
console.log(students[properties].Score,students[properties].Name,properties,students[properties].height)
if (students[properties].Score > highest_studentScore.Score){
	highest_studentScore = students[properties]
console.log(`Highest student: ${highest_studentScore.Name}, Score :${highest_studentScore.Score}`)
}
}
			