function printNumberDiamond(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let s = 0; s < rows - i; s++) {
      line += " ";
    }

    for (let j = 1; j <= i; j++) {
      line += j;
    }

    for (let j = i - 1; j >= 1; j--) {
      line += j;
    }

    console.log(line);
  }

  for (let i = rows - 1; i >= 1; i--) {
    let line = "";

    for (let s = 0; s < rows - i; s++) {
      line += " ";
    }

    for (let j = 1; j <= i; j++) {
      line += j;
    }

    for (let j = i - 1; j >= 1; j--) {
      line += j;
    }

    console.log(line);
  }
}

printNumberDiamond(5);
