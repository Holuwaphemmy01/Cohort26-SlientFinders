const colors = ["red","green","blue"]
new_array = []
for(const index in colors){
let string_length = colors[index].length
new_array.push(colors[index] +  ":" + string_length)
}
console.log(new_array)