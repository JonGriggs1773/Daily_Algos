
//? Write a recursive function that given a number returns the sum of integers from 1 to that number.
const rSigma = num => {
    if (num > 0) {
        return rSigma(num - 1) + num
    }
    return 0
}

console.log(rSigma(10))

//? Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate.
const rFactoral = num => {
    if (num < 0) {
        num = 0
    }
    if (!Number.isInteger(num)) {
        Math.trunc(num)
    }
    if (num == 1 || num == 0) {
        return 1
    }
    return rFactoral(num - 1) * num
}

console.log(rFactoral(10))

//? Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. 
const rFib = num => {
    if (num === 1) {
        return 1
    }
    if (num === 0) {
        return 0
    }
    return rFib(num - 1) + rFib(num - 2)
}

console.log(rFib(32))