const users = [
	{name: 'Alice',age: 25},
	{name: 'Bob',age: 17},
	{name: 'Charlie',age:30}
	]
new_array = []
for(const details in users){
if(users[details].age >= 18){
new_array.push(users[details])
}
}
console.log(new_array)
