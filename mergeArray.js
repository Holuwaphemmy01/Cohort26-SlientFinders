function mergeArray(array1, array2) {
    let array = [];

  
    for (let count = 0; count < array1.length; count++) {
        array.push(array1[count]);
    }

  
    for (let counter = 0; counter < array2.length; counter++) {
        if (!array.includes(array2[counter])) {
            array.push(array2[counter]);
        }
    }

    return array;
}

let input1 = [1, 2, 3];
let input2 = [4, 5, 6];
console.log(mergeArray(input1, input2));