function objectLength(colours){
result = colours.map((elements)=> elements.length);


let newArray = [];
let object = {};
for (let count = 0; count < colours.length; count++){
object[colours[count]] = result[count];
}

newArray.push(object);
return newArray;
}




let colors = ["red", "green", "blue" , "yellow"];
console.log(objectLength(colors));