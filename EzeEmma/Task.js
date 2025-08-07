/*A frontend engineer is working on a bug tracking app. Users report bugs and each report has a priority number (1-5). Due to a misconfiguration, the list now includes invalid entries like 0 or 6. She needs you to clean the array before it gets used in production.
write a function that removes all invalid priority numbers and returns only valid ones(1-5)*/

function removeInvalidPriorities(arrayOfNumbers){
    let validPriorities = [];
    for (let number = 0; number <= arrayOfNumbers.length; number++){
        let myPriorities = arrayOfNumbers[number];
        if (myPriorities >= 1 && myPriorities <= 6){
            validPriorities.push(myPriorities)
        }
    }return validPriorities
    
}




const reportPriorityNumbers = [3,33,43,23,5,54,4,24,1,23,2]
result = removeInvalidPriorities(reportPriorityNumbers)
console.log(result)

/*A business analyst has collected survey results in an array of objects. Each objects contains a customer's name and their satisfaction score (0-100). She wants only customers who scored 80 or above, sorted from highest to lowest, for a loyality program
write a function that returns the names of high scoring customers sorted by score deescending */

function getHighScoringCustomers(arrayOfHighScores){
    let highScoreingCustomers = []
    for (let value = 0; value < arrayOfHighScores.length; value++){
        let customer = arrayOfHighScores[value]
        if(customer.score >= 80 && customer.score <= 100){
            highScoreingCustomers.push(customer)
        }
    }    
    return highScoreingCustomers

}

const surveyResults = [
    { name: "Emma", score: 85 },
    { name: "Liam", score: 92 },
    { name: "Olivia", score: 75 },
    { name: "Noah", score: 88 },
    { name: "Ava", score: 60 }
];

loyalityQualifiers = getHighScoringCustomers(surveyResults)
console.log(loyalityQualifiers)












