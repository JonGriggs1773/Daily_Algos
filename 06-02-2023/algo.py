
def createAcronym(str):
    acronym = str[0]
    for i in range(len(str)):
        if str[i - 1] == " ":
            acronym += str[i]
    print(acronym)
    return acronym

createAcronym("This random string should return an acronym")