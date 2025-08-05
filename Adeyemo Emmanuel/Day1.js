function printDiamond(number) {
    for (let i = 1; i <= number; i++) {
        let line = "  " 

        for (let j = 1; j <= i; j++) {
          	line += j;
        }
        for (let j = i -1 ; j >= 1; j--) {
            line += j;
        }
        console.log(line);
    }
    
    for (let i = number ; i >= 1; i--) {
        let line = " ";
        for (let j = 1; j <= i; j++) {
            line += j;
        }
        for (let j = i - 1 ; j >= 1; j--) {
            line += j;
        }
        console.log(line);
    }
}

printDiamond(5);