function descendingOrder(number) {

let numbers = number.toString().split ('').toSorted().reverse().join('');
return Number(numbers)

}



console.log(descendingOrder(345563))