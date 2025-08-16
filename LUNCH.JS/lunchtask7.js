function mergeArrays(arr1, arr2) {
    let merged = [];

    
    for (let count = 0; count < arr1.length; count++) {
        if (!merged.includes(arr1[count])) {
            merged.push(arr1[count]);
        }
    }
    
    for (let counter = 0; counter < arr2.length; counter++) {
        if (!merged.includes(arr2[counter])) {
            merged.push(arr2[counter]);
        }
    }

    return merged;
}
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let result = mergeArrays(array1, array2);
console.log(result);
