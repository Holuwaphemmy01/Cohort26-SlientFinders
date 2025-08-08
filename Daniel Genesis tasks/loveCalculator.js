function loveCalculator(farred, joy) {
let fareedFlowerPetals = (Math.random() * 10);
let joyFlowerPetals = (Math.random() * 10);
if (fareedFlowerPetals % 2 == 0 && joyFlowerPetals % 2 != 0){
return true;
}
else if (fareedFlowerPetals % 2 != 0 && joyFlowerPetals % 2 == 0){
return true;
}
else {
return false;
}
}

let fareedFlowerPetals = (Math.random() * 10);
let joyFlowerPetals = (Math.random() * 10);
console.log(loveCalculator(fareedFlowerPetals, joyFlowerPetals));
