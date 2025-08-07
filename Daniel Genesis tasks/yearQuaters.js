const month_in_year = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
month = 5;
if (month < month_in_year.length){
	if (month <= 4){
	console.log(`${"month"}, ${month} ${month_in_year[month - 1]} ${"is in the first quater of the year"}` )
	}
	if (month <= 8 && month > 4){
	console.log(`${"month"}, ${month} ${month_in_year[month - 1]} ${"is in the second quater of the year"}` )
	}
	if (month <= 12 && month > 8){
	console.log(`${"month"}, ${month} ${month_in_year[month - 1]} ${"is in the third quater of the year"}` )
	}
}	
