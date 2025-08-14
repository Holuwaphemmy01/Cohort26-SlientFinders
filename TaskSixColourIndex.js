function objectLength(colours){
result = colours.map((elements)=> elements.length);


let a = colours[0];
let object = {};
for (let count = 0; count < colours.length; count++){
object[colours[count]] = result[count];

}
return  object;
}




let colors = ["red", "green", "blue"];
console.log(objectLength(colors));