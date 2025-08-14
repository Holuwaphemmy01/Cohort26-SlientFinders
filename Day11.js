function highestLowest(str){

let result = []
for(let count = 0; count <= str.length; count++){

for(let index = 0; index <= str.length; index++){

if (str[count] > str[index]){

result.push(str[count])
}

if (str[count] < str[index]){

result.push(str[count])

}
}
}
return result

}


