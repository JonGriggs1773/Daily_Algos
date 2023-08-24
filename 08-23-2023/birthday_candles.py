

def birthdayCakeCandles(candles):
    # Write your code here
    max = candles[0]
    for i in range(0, len(candles)):
        if candles[i] > max:
            max = candles[i]
            print(max)
    count = 0
    for num in candles:
        if num == max:
            count += 1
    return count
    



"""
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for 
each year of their total age. They will only be able to blow out the tallest of the candles. Count how many 
candles are tallest.

HackerRank

"""