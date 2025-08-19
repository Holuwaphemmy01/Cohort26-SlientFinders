function findNextSquare(square) {

    for (let index = 1; index * index <= square; index++) {
        if (index * index === square) {
            let squareNumber = index + 1;
            return squareNumber * squareNumber;
        }
    }
    return -1;
}



let square = 121;
let result = findNextSquare(square);
console.log(result);
