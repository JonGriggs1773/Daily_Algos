

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

// createAcronym("This random string should return an acronym")

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

// newAcronym("This random string should return an acronym")

//! Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
function removeString(arr, num) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= num) {
            result.push(arr[i])
        }
    }
    console.log(result)
    return result
}

// removeString(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 5)