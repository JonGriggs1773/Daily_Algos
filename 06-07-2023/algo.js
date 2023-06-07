

//! Build a standalone function to remove strings of even lengths from a given array.

//? Vanilla JavaScript
function removeEvenStrings(arr) {
    let oddArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 !== 0) {
            oddArr.push(arr[i])
        }
    }
    console.log(oddArr)
    return oddArr
}
// removeEvenStrings(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."])

//? Callback Function w/ .map() to iterate
const evensOutOfArray = arr => {
    let oddArr = []
    arr.map((str) => {
        if (str.length % 2 !== 0) {
            oddArr.push(str)
        }
    })
    console.log(oddArr)
    return oddArr
}
evensOutOfArray(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."])