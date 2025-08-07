function getQuater(number){
	month =`
		1.January
		2.february
		3.March
		4.April
		5.May
		6.June
		7.July
		8.August
		9.September
		10.October
		11.November
		13.December
		`;
console.log(month)
console.log("Enter the number of month")
switch(number){
	case 1: console.log("month 1 (january) is part of the  first quater"); break;
	case 2: console.log("month 2 (february) is part of the first quater"); break;
	case 3: console.log("month 3 (march) is part of the first quater"); break;
	case 4: console.log("month 4 (April) is part of the second quater"); break;
	case 5: console.log("month 5 (May) is part of the second quater"); break;
	case 6: console.log("month 6(june) is part of the second quater"); break;
	case 7: console.log("month 7 (july) is part of  the second quater"); break;
	case 8: console.log("month 8 (August) is part of the second quater"); break;
	case 9: console.log("month 9 (September) is part of the second quater"); break;
	case 10: console.log("month 10 (October) is part of the second quater"); break;
	case 11: console.log("month 11 (November) is part of the second quater"); break;
	case 12: console.log("month 12 (December) is part of the second quater"); break;
	default: console.log("invalid input");
}

return number;
}

console.log(getQuater(1));

