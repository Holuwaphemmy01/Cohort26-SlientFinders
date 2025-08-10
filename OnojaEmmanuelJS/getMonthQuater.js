function getMonthQuater(option){
	const month  = `
		Months...!
		1. January
		2. Febuary
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
	


console.log(month);
	switch(option){
	case 1: console.log(1 + "  January,   Is in the first Quater" ); break;
	case 2: console.log(2 + "  Febuary,   Is in the first Quater" ); break;
	case 3: console.log(3 + "  March,   Is in the first Quater" ); break;
	case 4: console.log(4 + "  April,   Is in the second Quater" ); break;
	case 5: console.log(5 + "  May,   Is in the second Quater" ); break;
	case 6: console.log(6 + "  June,   Is in the second Quater" ); break;
	case 7: console.log(7 + "  July,   Is in the third Quater" ); break;
	case 8: console.log(8 + "  August,   Is in the third Quater" ); break;
	case 9: console.log(9 + "  September,   Is in the third Quater" ); break;
	case 10: console.log(10 + "  October,   Is in the forth Quater" ); break;
	case 11: console.log( 11+ "  November,   Is in the forth Quater" ); break;
	case 12: console.log(12 + "  December,   Is in the forth Quater" ); break;
	default : console.log(" Not a correct input" ); 
	}
return option;
}

console.log(getMonthQuater(1));

