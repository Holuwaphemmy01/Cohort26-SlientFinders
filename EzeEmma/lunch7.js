/**
7. Write a function that merges two arrays into one without duplicates(no set allowed, must use a loop).
**/

function mergeArrays(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (arr1[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (arr2[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(arr2[i]);
        }
    }

    return result;
}

let first = [1, 2, 3, 4];
let second = [3, 4, 5, 6];
console.log(mergeArrays(first, second));





