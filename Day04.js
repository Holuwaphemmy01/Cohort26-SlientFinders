function monthQuarter(month) {
	if(month < 1 || month > 12){
		return "Invalid month";
	}
	return Math.ceil(month / 3);
	}

console.log(monthQuarter(3));
console.log(monthQuarter(5));