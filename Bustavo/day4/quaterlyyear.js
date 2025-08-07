function get_quaters(integer_month){
	if(integer_month > 1 && integer_month <= 3){
			let month = ""
			if (integer_month == 2) month = "Febuary"
			if (integer_month == 1) month = "January"
			if (integer_month == 3) month = "March"
		console.log(`Month ${integer_month} (${month}) is in the first Quater`)
		}
	if(integer_month > 3 && integer_month <= 6){
			let month = ""
			if (integer_month == 4) month = "April"
			if (integer_month == 5) month = "May"
			if (integer_month == 6) month = "June"
		console.log(`Month ${integer_month} (${month}) is in the Second Quater`)
		}
	if(integer_month > 6 && integer_month <= 9 ){
			let month = ""
			if (integer_month == 7) month = "July"
			if (integer_month == 8) month = "August"
			if (integer_month == 9) month = "September"
		console.log(`Month ${integer_month} (${month}) is in the Third Quater`)
			}
	if(integer_month > 9 && integer_month <=12){
			let month = ""
			if (integer_month == 10) month = "October"
			if (integer_month == 11) month = "November"
			if (integer_month == 12) month = "December"
		console.log(`Month ${integer_month} (${month}) is in the fourth Quater`)
			}





}

get_quaters(5);get_quaters(9);get_quaters(12)
get_quaters(3)