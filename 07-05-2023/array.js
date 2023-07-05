//! Given an array and an additional value, insert this value at the beginning of the array.



test = [1,2,3,4,5,6]

function pushFront(val, arr) {
    newArr = [val] + "," + arr
    return newArr
}

test = pushFront(20, test)
test = pushFront(20, test)
test = pushFront(20, test)
test = pushFront(20, test)
console.log(test)

