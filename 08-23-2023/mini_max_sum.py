



def miniMaxSum(arr):
    if arr[0] == arr[len(arr) - 1]:
        print(arr[0] * 4, arr[0] * 4)
    else:
        max = arr[0]
        min = arr[0]
        for i in range(0, len(arr)):
            
            if arr[i] > max:
                max = arr[i]
            if arr[i] < min:
                min = arr[i]
        min_sum = 0
        max_sum = 0
        for num in arr:
            if num != max:
                min_sum += num
            if num != min:
                max_sum += num
        print(min_sum, max_sum)





#! Given five positive integers, find the minimum and maximum values that can be calculated by summing
#! exactly four of the five integers. Then print the respective minimum and maximum values as a single 
#! line of two space-separated long integers.