function survey(ScoresOfCustomers){
let newDetails = [];
for (let count = 0; count < ScoresOfCustomers.length; count++){
  
   if (ScoresOfCustomers[count].score >= 80){
      newDetails.push(ScoresOfCustomers[count]);
}
} 


let temp = 0;
for (let count = 0; count < newDetails.length; count++){

  for (let counter = 0; counter < newDetails.length - count - 1; counter++){
     
    if (newDetails[counter].score < newDetails[counter + 1].score){
      
      temp =  newDetails[counter];
      newDetails[counter] = newDetails[counter + 1];
      newDetails[counter+ 1] = temp;

//console.log(counter);
}


}

}



return newDetails;

}

















let numbers = [{name:"silver", score:100},{name:"feyi", score:10},{name:"Emma", score:80},
{name:"Sam", score:110},{name:"basit", score:101}];
console.log(survey(numbers));

