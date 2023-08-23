
#todo Iterate through the list of nums to find the max and min
#todo Find the average of max and min and add them to a new list
#todo Remove max and min from old list


class Solution(object):
    def distinctAverages(self, nums):
        dis_avgs = []
        max = nums[0]
        min = nums[0]
        iterations = len(nums)
        for i in range(0, iterations):
            if len(nums) != 0:
                for num in nums:
                    if num >= max:
                        max = num
                        print("Max is here ---->", max)
                    if num <= min:
                        min = num
                        print("Min is here ---->", min)
                avg = (max + min) / 2
                print("Nums is here:", nums)
                print("Average Here:", avg)
                nums.remove(max)
                nums.remove(min)
                print("Nums after removal", nums)
                print(max, min)
                if len(nums) != 0:
                    max = nums[0]
                    min = nums[0]
                if avg not in dis_avgs:
                    dis_avgs.append(avg)
                    print("Dis Avgs here ----->", dis_avgs)
        whole_nums = []
        for num in dis_avgs:
            whole_nums.append(int(num))
        print(whole_nums)
        return len(whole_nums)

obj = Solution()

# print("Return Here:", obj.distinctAverages([4,1,4,0,3,5]))
# print("Return Here:", obj.distinctAverages([1, 100]))
print("Return Here:", obj.distinctAverages([9,5,7,8,7,9,8,2,0,7]))














# You are given a 0-indexed integer array nums of even length.

# As long as nums is not empty, you must repetitively:

# Find the minimum number in nums and remove it.
# Find the maximum number in nums and remove it.
# Calculate the average of the two removed numbers.
# The average of two numbers a and b is (a + b) / 2.

# For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
# Return the number of distinct averages calculated using the above process.

# Note that when there is a tie for a minimum or maximum number, any can be removed.

 

# Example 1:

# Input: nums = [4,1,4,0,3,5]
# Output: 2
# Explanation:
# 1. Remove 0 and 5, and the average is (0 + 5) / 2 = 2.5. Now, nums = [4,1,4,3].
# 2. Remove 1 and 4. The average is (1 + 4) / 2 = 2.5, and nums = [4,3].
# 3. Remove 3 and 4, and the average is (3 + 4) / 2 = 3.5.
# Since there are 2 distinct numbers among 2.5, 2.5, and 3.5, we return 2.
# Example 2:

# Input: nums = [1,100]
# Output: 1
# Explanation:
# There is only one average to be calculated after removing 1 and 100, so we return 1.