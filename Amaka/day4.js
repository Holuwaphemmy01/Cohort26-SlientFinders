function day4(month){
	let monthOfTheYear = `
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
	11. Novemeber
	12. December
`;
	switch(month) {
	case 1: 
         console.log("Month 1 (January), is part of the first quarter"); break;
	case 2: 
         console.log("Month 2 (February), is part of the first quarter"); break;           
	case 3:          
         console.log("Month 3 (March), is part of the first quarter"); break;
	case 4: 
         console.log("Month 4 (April), is part of the second quarter"); break;
	case 5: 
      	console.log("Month 5 (May), is part of the second quarter"); break;
	case 6: 
         console.log("Month 6 (June), is part of the second quarter"); break;
	case 7: 
         console.log("Month 7 (July), is part of the third quarter"); break;
	case 8:
      	console.log("Month 8 (August), is part of the third quarter"); break;
	case 9: 
         console.log("Month 9 (September), is part of the third quarter"); break;
	case 10: 
         console.log("Month 10 (October), is part of the fourth quarter"); break;
	case 11:
         console.log("Month 11 (November), is part of the fourth quarter"); break;
	case 12:
         console.log("Month 12 (December), is part of the fourth quarter"); break;
     }

} 

day4(10 );





