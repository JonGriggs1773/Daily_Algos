

//! Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).


//? Vanilla JS
function createAcronym(str) {
    let acronym = str[0]
    for(let i = 0; i < str.length; i++) {
        if(str[i - 1] == " ") {
            acronym += str[i]
        }
    }
    console.log(acronym)
    return acronym
}

createAcronym("This random string should return an acronym")

//? Callback function
const newAcronym = str => {
    let acronym = str[0]
    for(let i = 0; i < str.length; i++) {
        if(str[i - 1] == " ") {
            acronym += str[i]
        }
    }
    console.log(acronym)
    return acronym
}