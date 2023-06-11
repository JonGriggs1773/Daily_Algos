//! Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it.




//? Vanilla JavaScript
function pushFront(arr, num) {
    const newArr = [num]
    for (let i = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i]
    }
    return newArr
}

// console.log(pushFront([5,7,2,3], 8))

//? CallBack Function
const pushNumFront = (arr, num) => {
    const newArr = [num]
    for (let i = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i]
    }
    return newArr
}

console.log(pushNumFront([5,7,2,3], 8))