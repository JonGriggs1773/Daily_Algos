

#! Build a standalone function to remove strings of even lengths from a given array.
def removeEvens(arr):
    oddArr = []
    for str in arr:
        if len(str) % 2 != 0:
            oddArr.append(str)
    print(oddArr)
    return oddArr
removeEvens(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."])