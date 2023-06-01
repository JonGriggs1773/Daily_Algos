

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

removeWhiteSpace("Th i s is a l l   s  or ts  o f     me ss ed  u p")


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

noSpaces("Y e t a n o t h e r   m e s s e d   u p   s tr i n g")