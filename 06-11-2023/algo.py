
#! Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it.

def pushFront(arr, num):
    newArr = [num]
    for i in range(len(arr)):
        newArr.append(arr[i])
    return newArr

print(pushFront([5,7,2,3], 8))
    
