const colours = ["red", 
		"green" ,
		"blue" ,
								]
	const colourLength = {}					
	for (let index in colours){
		colourLength[colours[index]] =colours[index].length
		}
	console.log(colourLength)

