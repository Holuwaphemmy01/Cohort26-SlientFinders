let rowNumber = 5;
for (let index = 1; index <= rowNumber; index++){
	let row = "";
	for (let space = 1; space <= rowNumber - index; space++){
	row += " ";
	}
	for (let joint = 1; joint <= index; joint++){
	row += joint;
	}
	for(let decendingJoint = index - 1   ; decendingJoint >= 1 ; decendingJoint--){
	row += decendingJoint;
	}
	console.log(row);
}
for (let index = rowNumber-1 ; index >= 1; index--){
	let row = "";
	for (let space = 1; space <= rowNumber - index; space++){
	row += " ";
	}
	for (let joint = 1; joint <= index; joint++){
	row += joint;
	}
	for(let decendingJoint = index - 1   ; decendingJoint >= 1 ; decendingJoint--){
	row += decendingJoint;
	}
	console.log(row);
}
