let students = [{Name : 'Ade',
			Score: 32},
			{Name: 'Jude',
			Score: 21},
			{Name: 'David',
			Score: 23},
			{Name: 'Kate',
			Score:87}]
for(const properties in students){
if (students[properties].Score === 21){
console.log(`${properties}:${students[properties]}`)
}
}
			