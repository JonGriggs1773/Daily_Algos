

#! Create a function that, given a string, returns all of that string’s contents, but without blank.
def remove_white_space(str):
    newStr = ""
    for character in str:
        if character != " ":
            newStr = newStr + character
    print(newStr)
    return newStr

remove_white_space("Th i s is a l l   s  or ts  o f     me ss ed  u p")


#! Create a Python function that given a string, returns the integer made from the string’s digits.

def get_all_nums(str):
    numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    digits = ""
    for character in str:
        for num in numbers:
            if character == num:
                digits = digits + character
    print(digits)
    return digits

get_all_nums("1Thi2s i4s a s7t9ri0ng w1th 2 m3an3y num9346bers")