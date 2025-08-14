
function Breakfast4(user_input) {
for(let count = 1; count < user_input;count++) {
 if( user_input > 0 && user_input <= 3) {
  console.log("First Quater");
  }
 else if(user_input > 3 && user_input <= 6) {
   console.log("Second Quater");
   }
 else if(user_input > 6 && user_input <= 9) {
   console.log("Third Quater");
  }
 else if(user_input > 9 && user_input <= 12) {
   console.log("Fourth Quater");
  }
  
 return user_input;
 }
 }
 
 let user_input = 2;
