function lengthOfString(input) {
    let lengths = [];
    for (let count = 0; count < input.length; count++) {
        lengths.push(input[count].length);
    }
    return lengths;
}

let data = ["Ada", "Shola", "Titi"];
console.log(lengthOfString(data))