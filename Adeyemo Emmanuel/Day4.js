function SplitYear (number) {
		const months = `
	1.  January
	2.  February
	3.  March
	4.  April
	5.  May
	6.  June
	7.  July
	8.  August
	9.  September
	10. October
	11.  November
	12.  December
				`;

	console.log(months);
	switch(number) {
		case 1: console.log("Month 1 "+ " (January) is part of first quater of the year"); break;
		case 2: console.log("Month 2" + " (February) is part of first quater of the year"); break;
		case 3: console.log("Month 3"+ " (March) is part of first quater of the year"); break;
		case 4: console.log("Month 4"+ " (April) is part of second quater of the year"); break;
		case 5: console.log( "Month 5"+ " (May) is part of second quater of the year"); break;
		case 6: console.log("Month 6"+ " (June) is part of second quater of the year"); break;
		case 7: console.log("Month 7"+ " (July) is part of third quater of the year"); break;
		case 8: console.log("Month 8"+ " (August) is part of third quater of the year"); break;
		case 9: console.log("Month 9"+ " (September) is part of third quater of the year"); break;
		case 10: console.log("Month 10"+ " (October) is part of fourth quater of the year"); break;
		case 11: console.log("Month 11"+ " (November) is part of fourth quater of the year"); break;
		case 12: console.log("Month 12 "+ " (December) is part of fourth quater of the year"); break;
	default : console.log("Invalid input bruh!!");
	}

return number
}



console.log(SplitYear(4));

