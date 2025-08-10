function TwoArraySort(firstArray, secondArray) {
let join = 0;
  let joinedArray = firstArray.length + secondArray.length; 
  joinArray = firstArray;
 for (let merge = firstArray.length ; merge < joinedArray; merge++) {
   joinArray[merge] = secondArray[join];
    join++
  }
 

  for (let count = 0; count < joinedArray; count++) {
  
    for (let counter = count + 1; counter < joinedArray; counter++) {
    
      if (joinArray[count] > joinArray[counter]) {
       	 let sortArray = joinArray[counter];
      		  joinArray[counter] = joinArray[count];
      	 joinArray[count] = sortArray;
     	  }
     }
  	 } 

 	 return joinArray;
 }


firstArray = [23,45,76,12,56,76,32,12,34,];
secondArray =  [12,44,54,32,34,12,76,43,12,43];
 let result = TwoArraySort (firstArray,  secondArray);
console.log(result);

 
