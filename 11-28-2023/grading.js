
let input = [73, 67, 38, 33]


const gradingStudents = (grades) => {
    let roundedNums = []
    console.log(grades)
    for(let i = 0; i < grades.length; i++) {
        let distance = 5 - (grades[i] % 5)
        if(grades[i] % 5 === 0) {
            roundedNums.push(grades[i])
        }
        else if(grades[i] < 38) {
            roundedNums.push(grades[i])
        }
        else if(distance <= 3) {
            let numToPush = grades[i] + distance
            console.log(numToPush, grades[i], "SECOND ELSE IF")
            roundedNums.push(numToPush)
        }
        else {
            roundedNums.push(grades[i])
        }
    }
    return roundedNums
}

console.log(gradingStudents(input))