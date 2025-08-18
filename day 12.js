function reArrangingNumbers(numbers){
let num =  numbers.toString().split("").toSorted().reverse().join("");
return Number(num)



}

let numbers =  42145;
console.log(reArrangingNumbers(numbers))