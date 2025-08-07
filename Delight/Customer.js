function collection(arrayOfcollection) {

let array = [];

for(count = 0; count < arrayOfcollection.length; count++){

let aloop = arrayOfcollection[count];

if(aloop.score >= 80 && aloop.score <= 100) {

array.push(aloop);

array.sort((a, b) =>b.score - a.score);

}
}

return array;
}

result = collection([{name:"jahdi", score: 80}, {name:"debra", score: 90}, {name:"fola", score: 100}]);
console.log(result);