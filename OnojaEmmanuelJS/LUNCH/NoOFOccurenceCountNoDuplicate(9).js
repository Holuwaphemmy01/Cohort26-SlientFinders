function toCountNumberOfItems(array) {
    let itemCounts = {};

    for (let item of array) {
        if (itemCounts[item]) {
            itemCounts[item]++;
        } else {
            itemCounts[item] = 1;
        }
    }

    return itemCounts;
}

let items = ['apple', 'boy','boy','girl','girl','girl','boy','apple','goat','girl','boy','girl','boy','girl','boy','apple','apple','school',];
let result = toCountNumberOfItems(items);

console.log(result)