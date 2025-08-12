function announceName(fullName) {
const prompt = require('prompt-sync')()

let name = prompt('Enter Name: ');

   if (name.trim().toLowerCase() === "alex") {
 
        console.log("Hello Friend");

     } else {  
	
	console.log("Hi Stranger");

	} 


}
announceName();


