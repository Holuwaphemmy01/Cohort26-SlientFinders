function reuturnAge (array){
	let newArray = []
	for(let count = 0; count < array.length;count++){
		for(let user in array[count]){
			if(user == "age")
				if(array[count].age >= 18)
					newArray.push(array[count])
			}
		
	
		}
		return newArray


	}


	const user = [
			{
				name : "Paul",
				age : 12,
			
			},
			{
				name : "Basit",
				age : 19,
			
			},
			{
				name : "Farid",
				age : 20,
			
			},
			{
				name : "Chiame",
				age : 25,
			
			},
			{
				name : "Samuel",
				age : 18,
			
			},






				
		]

console.log(reuturnAge(user))