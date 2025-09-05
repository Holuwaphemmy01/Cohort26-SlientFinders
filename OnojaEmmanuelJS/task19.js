function outliners(userInput){
	evenArray = [];
	oddArray = [];
	evenCount = 0;
	oddCount = 0;
	for(let digit = 0; digit < userInput.length; digit++){
	if(userInput[digit] % 2 == 0){
		evenCount++;
		evenArray.push(userInput[digit]);
			}
	else { oddCount++;
		oddArray.push(userInput[digit]);}
		}
	if( evenCount > oddCount){
	return  oddArray.join();
	}
	else return evenArray.join();
	
		}


let digit = [1,2,2,2,2,2,4,6,8,10,4,5,];
let result = outliners(digit);
console.log(result);



