
#! Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).

def createAcronym(str):
    acronym = str[0]
    for i in range(len(str)):
        if str[i - 1] == " ":
            acronym += str[i]
    print(acronym)
    return acronym

createAcronym("This random string should return an acronym")

#! Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

def removeShortStrings(arr, num):
    newArr = []
    for string in arr:
        if len(string) >= num:
            newArr.append(string)
    print(newArr)
    return newArr 

removeShortStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 5)