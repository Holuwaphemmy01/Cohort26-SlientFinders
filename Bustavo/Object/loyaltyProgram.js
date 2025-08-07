function highestLowestCustomer(customerData){
		let sortedDataBase = []
	for( let eachCustomers = 0 ; eachCustomers < customerData.length;eachCustomers++){

		for(const customers in customerData[eachCustomers]){
			if(customers == "satisfactionScore"){
				if(customerData[eachCustomers].satisfactionScore >= 80){
					sortedDataBase.push(customerData[eachCustomers]);
						}
				
					}
				
				}

			}
				
		
			return sortedDataBase;
			



}


const sortSortedDatabase = (database) =>{
			let keepSorted;
		for( let count = 0; count  < database.length;count ++){
			for(index = count  + 1; index < database.length; index++){
				if(database[count].satisfactionScore < database[index].satisfactionScore){
						 keepSorted = database[count]
						database[count] = database[index]
						database[index] = keepSorted

						}
				

				}
			
			}
				return database
		
		}

	const mainDatabase = [	{
					name : "Bustao",
					satisfactionScore : 20,
					 
				},
				{
					name : "Farid",
					satisfactionScore : 80,
					 
				},
				{
					name : "Tope",
					satisfactionScore : 100,
					 
				},
				{
					name : "Yemi",
					satisfactionScore : 95,
					 
				},
				{
					name : "Yemisi",
					satisfactionScore : 98,
					 
				},
				{
					name : "Yemisi",
					satisfactionScore : 99,
					 
				},
				]
	
	 let arrangedDataBase = sortSortedDatabase(mainDatabase)	
	const sortedDatabase = highestLowestCustomer(arrangedDataBase)
	console.log(sortedDatabase,)