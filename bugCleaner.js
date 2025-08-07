function bugsCleaner(bugNumber){

realBugs = []

for(let bugIndex = 0; bugIndex < bugNumber.length; bugIndex++){

	if(bugNumber[bugIndex] >= 1 && bugNumber[bugIndex] < 6){
	
		realBugs.push(bugNumber[bugIndex])
}

}
return realBugs;

}


let bug = [0, 1, 2, 3, 4, 5, 6];

console.log(bugsCleaner(bug))