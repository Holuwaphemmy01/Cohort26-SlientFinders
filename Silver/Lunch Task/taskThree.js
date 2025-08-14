function array_of_strings(array){
const mappings = array.map( string => string.length)
return mappings
}
let value = ["car","earth","universe","ferrari"]
console.log(array_of_strings(value))