// Submissions	Leaderboard	Discussions	Editorial
// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:
// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?
// Note: Here's the set of types of characters in a form you can paste in your solution:
// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

let testPassword = "2bb"

const minimumNumber = password => {
    let required = 0
    let count = 6 - password.length
    if(!/[A-Z]/.test(password)) {
        required++
    }
    if(!/[a-z]/.test(password)) {
        required++
    }
    if(!/[0-9]/.test(password)) {
        required++
    }
    if(!/[^A-Za-z0-9]/.test(password)) {
        required++
    }
    if(required == count) {
        return count
    }
    else if(required > count) {
        count = required
    }
    return count
}

console.log(minimumNumber(testPassword))
