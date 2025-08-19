function getPhoneNumber(numbers) {
    let result = "";

    for (let index = 0; index < 10; index++) {
        if (index === 0) {
            result += "(";
        }

        result += numbers[index];

        if (index === 2) {
            result += ") ";
        } else if (index === 5) {
            result += "-";
        }
    }

    return result;
}


let phoneNumber = [1,2,3,4,5,6,7,8,9,0]
let answer = getPhoneNumber(phoneNumber);
console.log(answer);

