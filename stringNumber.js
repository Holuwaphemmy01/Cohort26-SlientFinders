function stringNumnber(stringNum){
let num = stringNum.split(" ").join("");
let sorted =  num.split("").toSorted();
newArray = [sorted[sorted.length - 1],sorted[0]]
return newArray.join(" ");
}

console.log("The highest and lowest are: "+stringNumnber("2      7      4    5    4   6  6   4"));