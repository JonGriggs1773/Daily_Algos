

//! Create a function that, given a string, returns all of that string’s contents, but without blank.


//? Vanilla JS
function removeWhiteSpace(str) {
    let newStr = ""
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i]
        }
    }
    console.log(newStr)
    return newStr
}

// removeWhiteSpace("Th i s is a l l   s  or ts  o f     me ss ed  u p")


//? CallBack Function
const noSpaces = str => {
    let newStr = ""
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i]
        }
    }
    console.log(newStr)
    return newStr
}

// noSpaces("Y e t a n o t h e r   m e s s e d   u p   s tr i n g")


//! Create a JavaScript function that given a string, returns the integer made from the string’s digits.

function getAllNums(str) {
    let digits = ""
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i]) == false) {
            digits += str[i]
        }
    }
    digits = noSpaces(digits)
    console.log(digits)
    return digits
}

// getAllNums("1Thi2s i4s a s7t9ri0ng w1th 2 m3an3y num9346bers")

//* This is something to commit and push to github

console.log("You made a mistake!!!")
console.error("You made a mistake!!!")
console.warn("You made a mistake!!!")

for(let i = 1; i < 6; i++) {
    console.count("Looped this much")
}
console.clear()

console.count(getAllNums("1Thi2s i4s a s7t9ri0ng w1th 2 m3an3y num9346bers"))