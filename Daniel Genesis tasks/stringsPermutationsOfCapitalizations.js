function stringsPermutationsOfCapitalizations(string){
let stringArrayPermutations = [' '];

for (index = 0; index < string.length; index++){
let char  = string[index];
let results = [];

for (let count = 0; count < stringArrayPermutations.length; count++){
let combination = stringArrayPermutations[count];
results.push(combination + char.toLowerCase());
results.push(combination + char.toUpperCase());
}
stringArrayPermutations = results;
}
return stringArrayPermutations;
}

console.log(stringsPermutationsOfCapitalizations("doh"));
