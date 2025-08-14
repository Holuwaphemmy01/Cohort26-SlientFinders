const users = [{name: "Alice", age : 25},
			{name: "Bob", age : 17},
			{name: "Chaelie", age : 30}];
			
		let highScores = [];
		for(let Scored in users){
		if(users[Scored].age >= 18){
			highScores.push(users[Scored]);
		}
			}
		console.log(highScores);
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
	