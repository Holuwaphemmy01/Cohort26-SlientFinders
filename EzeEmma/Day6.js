function capitalizationPermutations(str) {
    let result = [''];
    for (let char of str) {
        let temp = [];
        for (let item of result) {
            if (/[a-zA-Z]/.test(char)) {
                temp.push(item + char.toLowerCase());
                temp.push(item + char.toUpperCase());
            } else {
                temp.push(item + char);
            }
        }
        result = temp;
    }
    return result;
}

console.log(capitalizationPermutations('abc'));
