function monthsFunction(input){



const months = `
		1. January
		2. February
		3. March
		4. April
		5. May
		6. June
		7. July
		8. August
		9. September
		10. October
		11. November
		12. December

`;
console.log(months);


switch(input){
	case 1: console.log("January: First quater of the year"); break;
	case 2: console.log("February: First quater of the year"); break;
	case 3: console.log("March: First quater of the year"); break;
	case 4: console.log("April: Second quater of the year"); break;
	case 5: console.log("May: Second quater of the year"); break;
	case 6: console.log("June: Second quater of the year"); break;
	case 7: console.log("July: Third quater of the year"); break;
	case 8: console.log("August: Third quater of the year"); break;
	case 9: console.log("September: Third quater of the year"); break;
	case 10: console.log("October: Fourth quater of the year"); break;
	case 11: console.log("November: Fourth quater of the year"); break;
	case 12: console.log("December: Fourth quater of the year"); break;



}
	return input;

	}
console.log(monthsFunction(2));
