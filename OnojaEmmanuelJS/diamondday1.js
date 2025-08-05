	
		
		
		
		
		
		let n = 10;
		for (let i = 1; i <= n; i++) {
    let row = '';
    for (let space = 1; space <= n - i; space++) {
      row += ' ';
    }
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    for (let k = i - 1; k >= 1; k--) {
      row += k;
    }
    console.log(row);
  }

  // Generate the lower half of the diamond
  for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let space = 1; space <= n - i; space++) {
      row += ' ';
    }
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    for (let k = i - 1; k >= 1; k--) {
      row += k;
    }
    console.log(row);
  }


