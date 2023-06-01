

#! Create a function that, given a string, returns all of that string’s contents, but without blank.

def removeWhiteSpace(str):
    newStr = ""
    for character in str:
        if character != " ":
            newStr = newStr + character
    print(newStr)
    return newStr


removeWhiteSpace("Th i s is a l l   s  or ts  o f     me ss ed  u p")