function bugs(invalid){

let GPS = []

for(let count = 0; count < invalid.length; count++) {

if(invalid[count] >= 1 && invalid[count] < 6) {
GPS.push(invalid[count])
}
}

return GPS;

}

result = bugs([1,2,3,4,5,null,undefined,])
console.log(result);

