9. Write a function that counts how many times each elements appears in an array and returns an object with element counts

function countElements(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (counts[el] === undefined) {
            counts[el] = 1;
        } else {
            counts[el]++;
        }
    }
    return counts;
}
console.log(countElements([1, 2, 2, 3, 1, 4, 2]));