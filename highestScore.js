function highestScore(number) {  
    let highest = number[0].Score;
    for (let i = 0; i < number.length; i++) {
        if (number[i].Score > highest) {
            highest = number[i].Score;
        }
    }
    return highest;
}

let data = [ 
    {Name: "Feyi", Score: 99}, 
    {Name: "Ade", Score: 77}, 
    {Name: "Hassan", Score: 89} 
];

console.log(highestScore(data)); 