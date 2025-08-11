function splitReverse(String){
let split = String.split(" ")
let map = split.map(split => split.split(""))
let newArray = [];
for (let count = 0; count < map.length; count++){

newArray.push(map[count].reverse().join(""));
}
return newArray.join(" ") 
}

console.log(splitReverse("jesus is lord"));




