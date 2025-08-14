function TwistOfFate(timmyFlower, sarahFlower) {

if ((timmyFlower % 2 == 0 && sarahFlower % 2 != 0) || (timmyFlower % 2 != 0 && sarahFlower % 2 == 0)){
return true;
}

else {
return false;
}

}

let timmyFlower = -65;
let sarahFlower = 65;

console.log(TwistOfFate(timmyFlower, sarahFlower));h
