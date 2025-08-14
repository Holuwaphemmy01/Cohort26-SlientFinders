function bugTracking( arrayOfPriority)  {
	let cleanPriorityNumbers = [];
	
  for(let count = 0; count < arrayOfPriority.length; count++) {
	    if(arrayOfPriority[count] >= 1 && arrayOfPriority[count]  <= 5) { 
    	cleanPriorityNumbers.push(arrayOfPriority[count]);
    	}
    	}
  return cleanPriorityNumbers;
    }
  let priorityNumbers = [0, 0, 1, 2, 6, 4, 5]
  console.log(bugTracking(priorityNumbers));