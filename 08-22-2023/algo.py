


# Complete the 'getTotalX' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER_ARRAY b
#


#todo Create count variable
#todo Loop through every number from a[last] to b[0]



def getTotalX(a, b):
    # Write your code here
    count = 0
    for i in range(a[len(a) - 1], b[0] + 1):
        is_valid = True
        for num in a:
            if i % num != 0:
                is_valid = False
        for num in b:
            if num % i != 0:
                is_valid = False
        if is_valid == True:
            count += 1
    
    return count





print(getTotalX([2, 4], [16, 32, 96]))
print(getTotalX([2, 6], [24, 36]))