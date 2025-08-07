let person = { 
			firstName : 'Feyi',
			lastName : 'Onoja',
			age : 92,
			nationality : 'togolese'
						}
		for (const attribute in person){
			if(attribute == "age" || attribute == "lastName" || attribute == "nationality") {
			console.log(`${attribute}:${person[attribute]}`);
			}
			}